import {IImage} from "../Images/IImage";

export interface ISpotifyTrack {
    id: string,
    name: string,
    duration_ms: number,
    album: IAlbum,
}

interface IAlbum {
    id: string,
    images: IImage[],
    name: string
}
