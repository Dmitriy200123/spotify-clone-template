import {Transport} from "./Transport";
import {ISpotifyPlaylistsInfo} from "./SpotifyApiContracts/Playlists/ISpotifyPlaylistsInfo";
import {ISpotifyPlaylistInfo} from "./SpotifyApiContracts/Playlists/ISpotifyPlaylistInfo";
import {ISpotifyTracksInfoWithDate} from "./SpotifyApiContracts/Tracks/ISpotifyTracksInfoWithDate";

export class PlaylistsTransport extends Transport {
    public static getCurrentUserPlaylists(limit = 20, offset = 0) {
        return this.get(`/me/playlists?limit=${limit}&offset=${offset}`, json => json as ISpotifyPlaylistsInfo);
    }

    public static getUserPlaylists(userId: string, limit = 20, offset = 0) {
        return this.get(`users/${userId}/playlists?limit=${limit}&offset=${offset}`, json => json as ISpotifyPlaylistsInfo);
    }

    public static getPlaylist(playlistId: string) {
        return this.get(`/playlists/${playlistId}?fields=collaborative,description,followers,id,images,name,owner,public`, json => json as ISpotifyPlaylistInfo);
    }

    public static createPlaylist(userId: string, name: string, isPublic: boolean = true, isCollaborative: boolean = false, description: string = '') {
        return this.post(`users/${userId}/playlists`, {
            name: name,
            public: isPublic,
            collaborative: isCollaborative,
            description: description
        }, () => {
        })
    }

    public static getPlaylistTracks(playlistId: string, limit = 20, offset = 0) {
        return this.get(`/playlists/${playlistId}/tracks?limit=${limit}&offset=${offset}`, json => json as ISpotifyTracksInfoWithDate);
    }

    public static addTracksToPlaylist(playlistId: string, uris: string[], position: number = 0) {
        return this.post(`playlists/${playlistId}/tracks`, {
            uris: uris,
            position: position
        }, () => {
        });
    }

    public static deleteTracksFromPlaylist(playlistId: string, uris: string[], position: number = 0) {
        return this.delete(`playlists/${playlistId}/tracks`, {
            tracks: {
                uris: uris,
            }
        });
    }
}