import {ISpotifyTracksInfoWithDate} from "../Tracks/ISpotifyTracksInfoWithDate";
import {ISpotifyAlbumsInfo} from "../Albums/ISpotifyAlbumsInfo";
import {ISpotifyPlaylistsInfo} from "../Playlists/ISpotifyPlaylistsInfo";

export interface ISpotifySearchInfo {
    tracks: ISpotifyTracksInfoWithDate,
    albums: ISpotifyAlbumsInfo,
    playlists: ISpotifyPlaylistsInfo
}