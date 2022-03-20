import {action, autorun, makeObservable, observable} from "mobx";
import {UsersTransport} from "../Services/UsersTransport";
import {ITrackInfo} from "./Models/ITrackInfo";

class MyTopItemsStore {
    public currentUserTopTracks: ITrackInfo[] = [];
    public totalCount: number = 0;
    public offset: number = 0;
    public needFetching: boolean = false;
    public isFirstFetching: boolean = true;

    public readonly limit: number;

    public constructor(limit: number) {
        this.limit = limit;
        makeObservable(this, {
            currentUserTopTracks: observable,
            totalCount: observable,
            offset: observable,
            needFetching: observable,
            getCurrentUserTopTracks: action,
            setCurrenUserTopTracks: action,
            setFetching: action,
            setOffset: action,
            setTotal: action,
        })
    }

    public async getCurrentUserTopTracks(offset: number) {
        await UsersTransport.getCurrentUserTopTracks(this.limit, offset).then(tracksInfo => {
            this.setCurrenUserTopTracks(tracksInfo.items.map(info => ({
                id: info.id,
                name: info.name,
                imageUrl: info.album.images[0].url,
            })));
            if (tracksInfo.next != null) {
                this.setTotal(tracksInfo.total);
                this.setOffset(offset + this.limit);
            }
        })
    }

    setCurrenUserTopTracks(tracks: ITrackInfo[]) {
        this.currentUserTopTracks = [...this.currentUserTopTracks, ...tracks]
    }

    setFetching(value: boolean) {
        this.needFetching = value;
    }

    setTotal(total: number) {
        this.totalCount = total;
    }

    setOffset(offset: number) {
        this.offset = offset;
    }
}

const MyTopItemsStoreImpl = new MyTopItemsStore(10);

autorun(() => {
    if (MyTopItemsStoreImpl.needFetching) {
        MyTopItemsStoreImpl.getCurrentUserTopTracks(MyTopItemsStoreImpl.offset).finally(() => {
            MyTopItemsStoreImpl.setFetching(false);
        })
    }
});

export default MyTopItemsStoreImpl;