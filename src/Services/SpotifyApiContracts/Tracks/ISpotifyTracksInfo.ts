import {ISpotifyTrack} from "./ISpotifyTrack";

export interface ISpotifyTracksInfo {
    items: ISpotifyTrack[],
    next: string | null,
    previous: string | null,
    total: number
}