import {action, makeObservable, observable} from "mobx";
import {PlaylistsTransport} from "../Services/PlaylistsTransport";
import NotFoundItemImage from '../Images/no-found-item-image.jpg';
import {IPlaylist} from "./Models/IPlaylist";
import {ITrackInfo} from "./Models/ITrackInfo";

export class PlaylistStore {
    public playlist: IPlaylist = {
        id: '',
        isCollaborative: false,
        description: '',
        name: '',
        owner: {
            id: '',
            name: ''
        },
        imageUrl: '',
        isPublic: false,
        followersCount: 0
    };
    public tracks: ITrackInfo[] = [];
    public readonly limit: number;
    public totalCount: number = 0;
    public needFetching: boolean = true;
    public offset: number = 0;

    public constructor(limit: number) {
        this.limit = limit;
        makeObservable(this, {
            playlist: observable,
            tracks: observable,
            needFetching: observable,
            offset: observable,
            totalCount: observable,
            getPlaylist: action,
            setPlaylist: action,
            getTracks: action,
            setTracks: action,
            setFetching: action,
            reset: action
        })
    }

    public getPlaylist(id: string) {
        PlaylistsTransport.getPlaylist(id).then(info => this.setPlaylist({
            id: info.id,
            name: info.name,
            description: info.description,
            isCollaborative: info.collaborative,
            owner: {
                id: info.owner.id,
                name: info.owner.display_name
            },
            imageUrl: info.images.length !== 0 ? info.images[0].url : NotFoundItemImage,
            isPublic: info.public,
            followersCount: info.followers?.total ?? 0
        }))
    }

    setPlaylist(playlist: IPlaylist) {
        this.playlist = playlist;
    }

    public async getTracks(playlistId: string, offset: number) {
        await PlaylistsTransport.getPlaylistTracks(playlistId, this.limit, offset).then(info => {
            this.setTracks(info.items.map(track => ({
                id: track.track.id,
                name: track.track.name,
                imageUrl: '',
            })), info.total, offset + this.limit);
        })
    }

    setTracks(tracks: ITrackInfo[], totalCount: number, offset: number) {
        this.tracks = [...this.tracks, ...tracks];
        this.totalCount = totalCount;
        this.offset = offset;
    }

    setFetching(value: boolean) {
        this.needFetching = value;
    }

    reset() {
        this.playlist = {
            id: '',
            isCollaborative: false,
            description: '',
            name: '',
            owner: {
                id: '',
                name: ''
            },
            imageUrl: '',
            isPublic: false,
            followersCount: 0
        };
        this.tracks = [];
        this.totalCount = 0;
        this.needFetching = true;
        this.offset = 0;
    }
}

const PlaylistStoreImpl = new PlaylistStore(2);

export default PlaylistStoreImpl;