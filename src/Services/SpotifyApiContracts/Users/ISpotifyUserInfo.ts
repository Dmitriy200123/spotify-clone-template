export interface ISpotifyUserInfo {
    id: string,
    display_name: string,
    email: string,
    followers: {
        total: number
    },
    images: {
        url: string
    }[]
}