import {ISpotifyAlbumInfo} from "./ISpotifyAlbumInfo";

export interface ISpotifyAlbumsInfo {
    items: ISpotifyAlbumInfo[],
    next: string | null,
    previous: string | null,
    total: number
}