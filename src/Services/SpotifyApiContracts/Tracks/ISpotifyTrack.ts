export interface ISpotifyTrack {
    id: string,
    name: string,
    duration_ms: number,
    album: {
        id: string,
        images: {
            height: string | null,
            width: string | null,
            url: string
        }[],
        name: string
    },
}