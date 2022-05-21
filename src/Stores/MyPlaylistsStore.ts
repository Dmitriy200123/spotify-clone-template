import {action, makeObservable, observable, autorun} from "mobx";
import {PlaylistsTransport} from "../Services/PlaylistsTransport";
import NotFoundItemImage from '../Images/no-found-item-image.jpg';
import {IPlaylist} from "./Models/IPlaylist";

export class MyPlaylistsStore {
    private static _instance: MyPlaylistsStore;

    playlists: IPlaylist[] = [];
    totalCount: number = 0;
    offset: number = 0;
    needFetching: boolean = true;

    readonly limit: number;

    constructor(limit: number) {
        this.limit = limit;

        makeObservable(this, {
            playlists: observable,
            offset: observable,
            needFetching: observable,
            getCurrentUserPlaylists: action,
            setPlaylists: action,
            setFetching: action,
            increaseOffset: action
        });

        autorun(() => {
            if (this.needFetching && this.offset <= this.totalCount) {
                this.getCurrentUserPlaylists().finally(() => {
                    this.setFetching(false);
                    this.increaseOffset();
                });
            }
        });
    }

    static get instance() {
        if (!this._instance)
            this._instance = new MyPlaylistsStore(15);
        return this._instance;
    }

    async getCurrentUserPlaylists() {
        await PlaylistsTransport.getCurrentUserPlaylists(this.limit, this.offset).then(playlists => {
            this.setPlaylists(playlists.items.map(item => ({
                id: item.id,
                isCollaborative: item.collaborative,
                description: item.description,
                imageUrl: item.images.length !== 0 ? item.images[0].url : NotFoundItemImage,
                name: item.name,
                owner: {
                    id: item.owner.id,
                    name: item.owner.display_name
                },
                isPublic: item.public,
                tracksCount: item.tracks.total,
                followersCount: item.followers?.total ?? 0
            })));
            if (playlists.previous === null) {
                this.setTotal(playlists.total);
            }
        });
    }

    setPlaylists(newPlaylists: IPlaylist[]) {
        this.playlists = [...this.playlists, ...newPlaylists];
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