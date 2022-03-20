import {Transport} from "./Transport";

export class GenresTransport extends Transport {
    public static getGenres(): Promise<string[]> {
        return this.get('/recommendations/available-genre-seeds', json => json['genres']);
    }
}