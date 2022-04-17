import {Transport} from "./Transport";
import {ISpotifyTracksInfo} from "./SpotifyApiContracts/Tracks/ISpotifyTracksInfo";
import {ISpotifyUserInfo} from "./SpotifyApiContracts/Users/ISpotifyUserInfo";

export class UsersTransport extends Transport {
    static getCurrentUser() {
        return this.get('/me', json => json as ISpotifyUserInfo);
    }

    static getUser(id: string) {
        return this.get(`/users/${id}`, json => json as ISpotifyUserInfo);
    }

    static followPlaylist(playlistId: string, includeInPrivate = false) {
        return this.put(`playlists/${playlistId}/followers`, {
            public: includeInPrivate
        }, () => {
        });
    }

    static unfollowPlaylist(playlistId: string) {
        return this.delete(`playlists/${playlistId}/followers`);
    }

    static isUserFollowPlaylist(playlistId: string, userId: string) {
        return this.get(`playlists/${playlistId}/followers/contains?ids=${userId}`, json => Boolean(json[0]));
    }

    static getCurrentUserTopTracks(limit: number, offset: number) {
        return this.get(`/me/top/tracks?limit=${limit}&offset=${offset}`, json => json as ISpotifyTracksInfo);
    }
}