import {ITrackInfo} from "../Models/ITrackInfo";
import {ISpotifyTrack} from "../../Services/SpotifyApiContracts/Tracks/ISpotifyTrack";

export class TrackInfoConverter {
    static ToTrackInfo(info: ISpotifyTrack): ITrackInfo {
        return {
            id: info.id,
            name: info.name,
            imageUrl: info.album.images[0].url,
        };
    }
}