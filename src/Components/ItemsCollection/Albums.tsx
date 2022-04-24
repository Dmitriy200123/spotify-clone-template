import {observer} from "mobx-react-lite";
import React from "react";
import {MyAlbumsStoreImpl} from "../../Stores/MyAlbumsStore";
import {ItemsCollection} from "./ItemsCollection";

export const Albums = observer(() => {
    if (MyAlbumsStoreImpl.isFirstFetching) {
        MyAlbumsStoreImpl.setFetching(true);
        MyAlbumsStoreImpl.isFirstFetching = false;
    }

    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollHeight - (e.currentTarget.scrollTop + e.currentTarget.clientHeight) < 50
            && MyAlbumsStoreImpl.albums.length < MyAlbumsStoreImpl.totalCount) {
            MyAlbumsStoreImpl.setFetching(true);
        }
    };

    return <ItemsCollection
        items={MyAlbumsStoreImpl.albums.map(album => ({
            id: album.id,
            imageUrl: album.imageUrl,
            name: album.name,
            authorName: album.artists.map(artist => artist.name).join('&')
        }))}
        onScroll={onScroll}
    />
});