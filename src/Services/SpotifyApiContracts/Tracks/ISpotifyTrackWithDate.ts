import {ISpotifyTrack} from "./ISpotifyTrack";

export interface ISpotifyTrackWithDate {
    added_at: string,
    added_by: {
        id: string
    },
    track: ISpotifyTrack
}