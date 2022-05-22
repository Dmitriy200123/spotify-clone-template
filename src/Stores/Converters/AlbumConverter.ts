import {IAlbum} from "../Models/IAlbum";
import {ISpotifyAlbumInfo} from "../../Services/SpotifyApiContracts/Albums/ISpotifyAlbumInfo";
import NotFoundItemImage from "../../Images/no-found-item-image.jpg";

export class AlbumConverter {
    static ToAlbum(spotifyAlbumInfo: ISpotifyAlbumInfo): IAlbum {
        return {
            id: spotifyAlbumInfo.album.id,
            name: spotifyAlbumInfo.album.name,
            imageUrl: spotifyAlbumInfo.album.images.length !== 0 ? spotifyAlbumInfo.album.images[0].url : NotFoundItemImage,
            totalTracks: spotifyAlbumInfo.album.total_tracks,
            artists: spotifyAlbumInfo.album.artists.map(artist => (
                {
                    name: artist.name
                }))
        };
    }
}