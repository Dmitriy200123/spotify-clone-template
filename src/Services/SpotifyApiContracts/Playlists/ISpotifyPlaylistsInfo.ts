import {ISpotifyPlaylistInfo} from "./ISpotifyPlaylistInfo";

export interface ISpotifyPlaylistsInfo {
    items: ISpotifyPlaylistInfo[],
    previous: string | null,
    next: string | null
    total: number
}