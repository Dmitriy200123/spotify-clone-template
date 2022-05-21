import {action, autorun, makeObservable, observable} from "mobx";
import {UsersTransport} from "../Services/UsersTransport";
import {ITrackInfo} from "./Models/ITrackInfo";

export class MyTopTracksStore {
    private static _instance: MyTopTracksStore;

    tracks: ITrackInfo[] = [];
    totalCount: number = 0;
    offset: number = 0;
    needFetching: boolean = true;

    readonly limit: number;

    constructor(limit: number) {
        this.limit = limit;

        makeObservable(this, {
            tracks: observable,
            needFetching: observable,
            offset: observable,
            getCurrentUserTopTracks: action,
            setTracks: action,
            setFetching: action,
            increaseOffset: action
        });

        autorun(() => {
            if (this.needFetching && this.offset <= this.totalCount) {
                this.getCurrentUserTopTracks().finally(() => {
                    this.setFetching(false);
                    this.increaseOffset();
                });
            }
        });
    }

    static get instance() {
        if (!this._instance)
            this._instance = new MyTopTracksStore(10);
        return this._instance;
    }

    async getCurrentUserTopTracks() {
        await UsersTransport.getCurrentUserTopTracks(this.limit, this.offset).then(tracksInfo => {
            this.setTracks(tracksInfo.items.map(info => ({
                id: info.id,
                name: info.name,
                imageUrl: info.album.images[0].url,
            })));
            if (tracksInfo.previous === null) {
                this.setTotal(tracksInfo.total);
            }
        })
    }

    setTracks(tracks: ITrackInfo[]) {
        this.tracks = [...this.tracks, ...tracks]
    }

    setFetching(needFetching: boolean) {
        this.needFetching = needFetching;
    }

    setTotal(total: number) {
        this.totalCount = total;
    }

    increaseOffset() {
        this.offset += this.limit;
    }
}