import {observer} from "mobx-react-lite";
import {MyPlaylistsStoreImpl} from "../../Stores/MyPlaylistsStore";
import React from "react";
import {ItemsCollection} from "./ItemsCollection";

export const Playlists = observer(() => {
    if (MyPlaylistsStoreImpl.isFirstFetching) {
        MyPlaylistsStoreImpl.setFetching(true);
        MyPlaylistsStoreImpl.isFirstFetching = false;
    }

    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollHeight - (e.currentTarget.scrollTop + e.currentTarget.clientHeight) < 50
            && MyPlaylistsStoreImpl.currentUserPlaylists.length < MyPlaylistsStoreImpl.totalCount) {
            MyPlaylistsStoreImpl.setFetching(true);
        }
    };

    return <ItemsCollection
        items={MyPlaylistsStoreImpl.currentUserPlaylists.map(playlist => ({
            id: playlist.id,
            imageUrl: playlist.imageUrl,
            name: playlist.name,
            authorName: `Автор: ${playlist.owner.name}`
        }))}
        onScroll={onScroll}
    />
});