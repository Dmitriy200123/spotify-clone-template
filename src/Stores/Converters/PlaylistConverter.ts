import {IPlaylist} from "../Models/IPlaylist";
import {ISpotifyPlaylistInfo} from "../../Services/SpotifyApiContracts/Playlists/ISpotifyPlaylistInfo";
import NotFoundItemImage from "../../Images/no-found-item-image.jpg";

export class PlaylistConverter {
    static ToPlaylist(spotifyPlaylist: ISpotifyPlaylistInfo): IPlaylist {
        return {
            id: spotifyPlaylist.id,
            isCollaborative: spotifyPlaylist.collaborative,
            description: spotifyPlaylist.description,
            imageUrl: spotifyPlaylist.images.length !== 0 ? spotifyPlaylist.images[0].url : NotFoundItemImage,
            name: spotifyPlaylist.name,
            owner: {
                id: spotifyPlaylist.owner.id,
                name: spotifyPlaylist.owner.display_name
            },
            isPublic: spotifyPlaylist.public,
            followersCount: spotifyPlaylist.followers?.total ?? 0
        };
    }
}