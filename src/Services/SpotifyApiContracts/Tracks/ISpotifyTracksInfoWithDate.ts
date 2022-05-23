import {ISpotifyTrackWithDate} from "./ISpotifyTrackWithDate";

export interface ISpotifyTracksInfoWithDate {
    items: ISpotifyTrackWithDate[],
    next: string | null,
    previous: string | null,
    total: number
}