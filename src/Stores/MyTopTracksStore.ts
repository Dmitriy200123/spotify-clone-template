import {action, autorun, makeObservable, observable} from "mobx";
import {UsersTransport} from "../Services/UsersTransport";
import {ITrackInfo} from "./Models/ITrackInfo";
import {MessageStore} from "./MessageStore";
import {TrackInfoConverter} from "./Converters/TrackInfoConverter";

export class MyTopTracksStore {
    private static _instance: MyTopTracksStore;
    private readonly __messageStore: MessageStore;

    tracks: ITrackInfo[] = [];
    totalCount: number = 0;
    offset: number = 0;
    needFetching: boolean = true;

    readonly limit: number;

    constructor(limit: number, messageStore: MessageStore) {
        this.limit = limit;
        this.__messageStore = messageStore;

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
            this._instance = new MyTopTracksStore(10, MessageStore.instance);
        return this._instance;
    }

    async getCurrentUserTopTracks() {
        try {
            const tracksInfo = await UsersTransport.getCurrentUserTopTracks(this.limit, this.offset);
            this.setTracks(tracksInfo.items.map(TrackInfoConverter.ToTrackInfo));
            if (tracksInfo.previous === null) {
                this.setTotal(tracksInfo.total);
            }
        } catch {
            this.__messageStore.addErrorMessage('Не удалось загрузить любимые треки')
        }
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