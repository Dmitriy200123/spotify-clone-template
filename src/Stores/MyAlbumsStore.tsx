import {action, autorun, makeObservable, observable} from "mobx";
import {AlbumsTransport} from "../Services/AlbumsTransport";
import {IAlbum} from "./Models/IAlbum";
import {MessageStore} from "./MessageStore";
import {AlbumConverter} from "./Converters/AlbumConverter";

export class MyAlbumsStore {
    private static _instance: MyAlbumsStore;
    private readonly __messageStore: MessageStore;

    albums: IAlbum[] = [];
    totalCount: number = 0;
    offset: number = 0;
    needFetching: boolean = true;

    readonly limit: number;

    constructor(limit: number, messageStore: MessageStore) {
        this.limit = limit;
        this.__messageStore = messageStore;

        makeObservable(this, {
            albums: observable,
            offset: observable,
            needFetching: observable,
            getAlbums: action,
            setAlbums: action,
            setFetching: action,
            increaseOffset: action
        });

        autorun(() => {
            if (this.needFetching && this.offset <= this.totalCount) {
                this.getAlbums().finally(() => {
                    this.setFetching(false);
                    this.increaseOffset();
                })
            }
        });
    }

    static get instance() {
        if (!this._instance)
            this._instance = new MyAlbumsStore(8, MessageStore.instance);
        return this._instance;
    }

    async getAlbums() {
        try {
            const albumsInfo = await AlbumsTransport.getMyAlbums(this.limit, this.offset);
            this.setAlbums(albumsInfo.items.map(AlbumConverter.ToAlbum));
            if (albumsInfo.previous === null) {
                this.setTotal(albumsInfo.total);
            }
        } catch {
            this.__messageStore.addErrorMessage('Не удалось загрузить альбомы');
        }
    }

    setAlbums(albums: IAlbum[]) {
        this.albums = [...this.albums, ...albums]
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