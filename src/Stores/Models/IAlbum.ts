export interface IAlbum {
    id: string,
    name: string,
    imageUrl: string,
    totalTracks: number,
    artists: {
        name: string
    }[]
}