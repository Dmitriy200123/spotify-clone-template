import {Transport} from "./Transport";
import {ISpotifyAlbumsInfo} from "./SpotifyApiContracts/Albums/ISpotifyAlbumsInfo";
import {ISpotifyAlbumInfo} from "./SpotifyApiContracts/Albums/ISpotifyAlbumInfo";
import {ISpotifyTracksInfoWithDate} from "./SpotifyApiContracts/Tracks/ISpotifyTracksInfoWithDate";

export class AlbumsTransport extends Transport {
    static getAlbum(id: string) {
        return this.get(`album/${id}`, json => json as ISpotifyAlbumInfo);
    }

    static saveAlbumsToMe(albumIds: string[]) {
        return this.put(`me/albums`, {
            ids: albumIds
        }, () => {
        })
    }

    static deleteAlbumsFromMe(albumIds: string[]) {
        return this.delete(`me/albums`, {
            ids: albumIds
        })
    }

    static getMyAlbums(limit = 20, offset = 0) {
        return this.get(`/me/albums?limit=${limit}&offset=${offset}`, json => json as ISpotifyAlbumsInfo);
    }

    static isSavedAlbumsToMe(albumIds: string[]) {
        return this.get(`me/albums/contains?${albumIds.join(',')}`, json => json as boolean[])
    }

    static getAlbumTracks(albumId: string, limit: 20, offset: 0) {
        return this.get(`albums/${albumId}/tracks=${limit}&offset=${offset}`, json => json as ISpotifyTracksInfoWithDate);
    }
}