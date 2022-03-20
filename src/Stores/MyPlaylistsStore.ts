import {action, makeObservable, observable, autorun} from "mobx";
import {PlaylistsTransport} from "../Services/PlaylistsTransport";
import NotFoundItemImage from '../Images/no-found-item-image.jpg';
import {IPlaylist} from "./Models/IPlaylist";

class MyPlaylistsStore {
    public currentUserPlaylists: IPlaylist[] = [];
    public totalCount: number = 0;
    public offset: number = 0;
    public needFetching: boolean = false;
    public isFirstFetching: boolean = true;

    public readonly limit: number;

    public constructor(limit: number) {
        this.limit = limit;
        makeObservable(this, {
            currentUserPlaylists: observable,
            totalCount: observable,
            offset: observable,
            needFetching: observable,
            getCurrentUserPlaylists: action,
            setCurrentUserPlaylists: action,
            setFetching: action,
            setOffset: action,
            setTotal: action
        })
    }

    public async getCurrentUserPlaylists(offset: number) {
        await PlaylistsTransport.getCurrentUserPlaylists(this.limit, offset).then(playlists => {
            this.setCurrentUserPlaylists(playlists.items.map(item => ({
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
            if (playlists.next != null) {
                this.setTotal(playlists.total);
                this.setOffset(offset + this.limit);
            }
        });
    }

    public setCurrentUserPlaylists(newPlaylists: IPlaylist[]) {
        this.currentUserPlaylists = [...this.currentUserPlaylists, ...newPlaylists];
    }

    public setFetching(value: boolean) {
        this.needFetching = value;
    }

    setTotal(total: number) {
        this.totalCount = total;
    }

    setOffset(offset: number) {
        this.offset = offset;
    }
}

const MyPlaylistsStoreImpl = new MyPlaylistsStore(8);

autorun(() => {
    if (MyPlaylistsStoreImpl.needFetching)
        MyPlaylistsStoreImpl.getCurrentUserPlaylists(MyPlaylistsStoreImpl.offset).finally(() => MyPlaylistsStoreImpl.setFetching(false));
});

export default MyPlaylistsStoreImpl;