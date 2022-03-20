import {Transport} from "./Transport";
import {ISpotifySearchInfo} from "./SpotifyApiContracts/Search/ISpotifySearchInfo";

export class SearchTransport extends Transport {
    public static search(query: string, limit: number, offset: number) {
        return this.get(`search?q=${query}&type='track,album,playlist&limit=${limit}&offset=${offset}`, json => json as ISpotifySearchInfo);
    }
}