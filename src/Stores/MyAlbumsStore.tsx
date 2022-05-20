import {action, autorun, makeObservable, observable} from "mobx";
import {AlbumsTransport} from "../Services/AlbumsTransport";
import NotFoundItemImage from '../Images/no-found-item-image.jpg';
import {IAlbum} from "./Models/IAlbum";

export class MyAlbumsStore {
    private static _instance: MyAlbumsStore;

    albums: IAlbum[] = [];
    totalCount: number = 0;
    offset: number = 0;
    needFetching: boolean = true;

    readonly limit: number;

    constructor(limit: number) {
        this.limit = limit;

        makeObservable(this, {
            albums: observable,
            offset: observable,
            needFetching: observable,
            getAlbums: action,
            setAlbums: action,
            setFetching: action,
            increaseOffset: action
        });

        autorun(() => {
            if (this.needFetching && this.offset <= this.totalCount) {
                this.getAlbums().finally(() => {
                    this.setFetching(false);
                    this.increaseOffset();
                })
            }
        });
    }

    static get instance() {
        if (!this._instance)
            this._instance = new MyAlbumsStore(8);
        return this._instance;
    }

    async getAlbums() {
        await AlbumsTransport.getMyAlbums(this.limit, this.offset).then(albumsInfo => {
            this.setAlbums(albumsInfo.items.map(info => {
                return {
                    id: info.album.id,
                    name: info.album.name,
                    imageUrl: info.album.images.length !== 0 ? info.album.images[0].url : NotFoundItemImage,
                    totalTracks: info.album.total_tracks,
                    artists: info.album.artists.map(artist => (
                        {
                            name: artist.name
                        }))
                }
            }));
            if (albumsInfo.previous === null) {
                this.setTotal(albumsInfo.total);
            }
        })
    }

    setAlbums(albums: IAlbum[]) {
        this.albums = [...this.albums, ...albums]
    }

    setFetching(value: boolean) {
        this.needFetching = value;
    }

    setTotal(total: number) {
        this.totalCount = total;
    }

    increaseOffset() {
        this.offset += this.limit;
    }
}