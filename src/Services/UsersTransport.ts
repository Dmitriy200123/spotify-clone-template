import {Transport} from "./Transport";
import {ISpotifyTracksInfo} from "./SpotifyApiContracts/Tracks/ISpotifyTracksInfo";
import {ISpotifyUserInfo} from "./SpotifyApiContracts/Users/ISpotifyUserInfo";

export class UsersTransport extends Transport {
    public static getCurrentUser() {
        return this.get('/me', json => json as ISpotifyUserInfo);
    }

    public static getUser(id: string) {
        return this.get(`/users/${id}`, json => json as ISpotifyUserInfo);
    }

    public static followPlaylist(playlistId: string, includeInPrivate = false) {
        return this.put(`playlists/${playlistId}/followers`, {
            public: includeInPrivate
        }, () => {
        });
    }

    public static unfollowPlaylist(playlistId: string) {
        return this.delete(`playlists/${playlistId}/followers`);
    }

    public static isUserFollowPlaylist(playlistId: string, userId: string, includeInPrivate = false) {
        return this.get(`playlists/${playlistId}/followers/contains?ids=${userId}`, json => Boolean(json[0]));
    }

    public static getCurrentUserTopTracks(limit: number, offset: number) {
        return this.get(`/me/top/tracks?limit=${limit}&offset=${offset}`, json => json as ISpotifyTracksInfo);
    }
}