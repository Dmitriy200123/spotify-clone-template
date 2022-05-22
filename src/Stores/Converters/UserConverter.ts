import {IUser} from "../Models/IUser";
import {ISpotifyUserInfo} from "../../Services/SpotifyApiContracts/Users/ISpotifyUserInfo";

export class UserConverter {
    static ToUser(spotifyUserInfo: ISpotifyUserInfo): IUser {
        return {
            id: spotifyUserInfo.id,
            name: spotifyUserInfo.display_name,
            image: spotifyUserInfo.images[0].url,
        };
    }
}