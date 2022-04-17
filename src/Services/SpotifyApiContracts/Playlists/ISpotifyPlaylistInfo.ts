import {ISpotifyOwner} from "../Owners/ISpotifyOwner";
import {IImage} from "../Images/IImage";

export interface ISpotifyPlaylistInfo {
    id: string,
    collaborative: boolean,
    description: string,
    images: IImage[],
    name: string,
    owner: ISpotifyOwner,
    public: boolean,
    tracks: { total: number }
    followers: { total: number } | null
}