export interface ISpotifyAlbumInfo {
    album: {
        id: string,
        images: {
            height: number,
            width: number,
            url: string,
        }[],
        artists: {
            name: string
        }[],
        name: string,
        total_tracks: number,
    }
}