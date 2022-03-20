import {action, autorun, makeObservable, observable} from "mobx";
import {AlbumsTransport} from "../Services/AlbumsTransport";
import NotFoundItemImage from '../Images/no-found-item-image.jpg';
import {IAlbum} from "./Models/IAlbum";

class MyAlbumsStore {
    public albums: IAlbum[] = [];
    public totalCount: number = 0;
    public offset: number = 0;
    public needFetching: boolean = false;
    public isFirstFetching: boolean = true;

    public readonly limit: number;

    public constructor(limit: number) {
        this.limit = limit;
        makeObservable(this, {
            albums: observable,
            totalCount: observable,
            offset: observable,
            needFetching: observable,
            getAlbums: action,
            setAlbums: action,
            setFetching: action,
            setOffset: action,
            setTotal: action,
        })
    }

    public async getAlbums(offset: number) {
        await AlbumsTransport.getMyAlbums(this.limit, offset).then(albumsInfo => {
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
            if (albumsInfo.next != null) {
                this.setTotal(albumsInfo.total);
                this.setOffset(offset + this.limit);
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

    setOffset(offset: number) {
        this.offset = offset;
    }
}

const MyAlbumsStoreImpl = new MyAlbumsStore(8);

autorun(() => {
    if (MyAlbumsStoreImpl.needFetching) {
        MyAlbumsStoreImpl.getAlbums(MyAlbumsStoreImpl.offset).finally(() => MyAlbumsStoreImpl.setFetching(false));
    }
});

export default MyAlbumsStoreImpl;