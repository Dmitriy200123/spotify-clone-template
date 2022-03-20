import {IPlaylistOwner} from "./IPlaylistOwner";

export interface IPlaylist {
    id: string,
    isCollaborative: boolean,
    description: string,
    imageUrl: string,
    name: string,
    owner: IPlaylistOwner,
    isPublic: boolean,
    followersCount: number
}