import {ICollectionItem, ItemsCollection, ScrollDirection} from "../ItemsCollection/ItemsCollection";
import {useIntersectionObserver} from "../../Hooks/useIntersectionObserver";
import React from "react";
import {MyPlaylistsStore} from "../../Stores/MyPlaylistsStore";
import {observer} from "mobx-react-lite";
import {setChildrenContent} from "./setChildrenContent";
import './MusicalCollection.css';
import {needScrollRef} from "../../ScrollRef/needScrollRef";

export const Playlists = observer(() => {
    const needSetRef = needScrollRef(MyPlaylistsStore.instance);
    const ref = useIntersectionObserver(() => MyPlaylistsStore.instance.setFetching(true));

    const items: Array<ICollectionItem> = MyPlaylistsStore.instance.playlists.map(playlist => ({
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.imageUrl,
        authorName: `Автор: ${playlist.owner.name}`
    }));

    return <ItemsCollection items={items}
                            scrollDirection={ScrollDirection.Vertical}
                            needSetRef={needSetRef}
                            ref={ref}
                            setChildrenContent={setChildrenContent}
                            className={'musicalCollection'}
                            childrenClassName={'musicalCollectionItem'}/>;
});