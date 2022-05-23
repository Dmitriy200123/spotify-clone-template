import {action, makeObservable, observable, autorun} from "mobx";
import {PlaylistsTransport} from "../Services/PlaylistsTransport";
import {IPlaylist} from "./Models/IPlaylist";
import {MessageStore} from "./MessageStore";
import {PlaylistConverter} from "./Converters/PlaylistConverter";

export class MyPlaylistsStore {
    private static _instance: MyPlaylistsStore;
    private readonly __messageStore: MessageStore;

    playlists: IPlaylist[] = [];
    totalCount: number = 0;
    offset: number = 0;
    needFetching: boolean = true;

    readonly limit: number;

    constructor(limit: number, messageStore: MessageStore) {
        this.limit = limit;
        this.__messageStore = messageStore;

        makeObservable(this, {
            playlists: observable,
            offset: observable,
            needFetching: observable,
            getCurrentUserPlaylists: action,
            setPlaylists: action,
            setFetching: action,
            increaseOffset: action
        });

        autorun(() => {
            if (this.needFetching && this.offset <= this.totalCount) {
                this.getCurrentUserPlaylists().finally(() => {
                    this.setFetching(false);
                    this.increaseOffset();
                });
            }
        });
    }

    static get instance() {
        if (!this._instance)
            this._instance = new MyPlaylistsStore(15, MessageStore.instance);
        return this._instance;
    }

    async getCurrentUserPlaylists() {
        try {
            const playlists = await PlaylistsTransport.getCurrentUserPlaylists(this.limit, this.offset);
            this.setPlaylists(playlists.items.map(PlaylistConverter.ToPlaylist));
            if (playlists.previous === null) {
                this.setTotal(playlists.total);
            }
        } catch {
            this.__messageStore.addErrorMessage('Не удалось загрузить плейлисты');
        }
    }

    setPlaylists(newPlaylists: IPlaylist[]) {
        this.playlists = [...this.playlists, ...newPlaylists];
    }

    setFetching(value: boolean) {
        this.needFetching = value;
    }

    setTotal(total: number) {
        this.totalCount = total;
    }

    increaseOffset() {
        this.offset += this.limit;
    }
}