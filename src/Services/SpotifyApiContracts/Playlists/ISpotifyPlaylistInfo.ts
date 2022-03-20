import {ISpotifyOwner} from "../Owners/ISpotifyOwner";

export interface ISpotifyPlaylistInfo {
    id: string,
    collaborative: boolean,
    description: string,
    images: { url: string }[],
    name: string,
    owner: ISpotifyOwner,
    public: boolean,
    tracks: { total: number }
    followers: { total: number } | null
}