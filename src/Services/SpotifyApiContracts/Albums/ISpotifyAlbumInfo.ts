import {IImage} from "../Images/IImage";

export interface ISpotifyAlbumInfo {
    album: {
        id: string,
        images: IImage[],
        artists: IArtist[],
        name: string,
        total_tracks: number,
    }
}

interface IArtist {
    name: string
}