import {observer} from "mobx-react-lite";
import {MyPlaylistsStore} from "../../Stores/MyPlaylistsStore";
import React from "react";
import {Link} from "react-router-dom";
import './PlaylistNames.css';
import '../../CommonStyles/ScrollStyle.css';
import {useIntersectionObserver} from "../../Hooks/useIntersectionObserver";
import {ICollectionItem, ItemsCollection, ScrollDirection} from "../ItemsCollection/ItemsCollection";
import {needScrollRef} from "../../ScrollRef/needScrollRef";

export const PlaylistNames = observer(() => {
    const needRef = needScrollRef(MyPlaylistsStore.instance);
    const ref = useIntersectionObserver(() => MyPlaylistsStore.instance.setFetching(true));

    const items: Array<ICollectionItem> = MyPlaylistsStore.instance.playlists.map(playlist => ({
        id: playlist.id,
        name: playlist.name,
    }));

    const setChildrenContent = (item: ICollectionItem) => <Link className='playlistNamesItem__link'
                                                                to=''>{item.name}</Link>;

    return <ItemsCollection items={items}
                            scrollDirection={ScrollDirection.Vertical}
                            needSetRef={needRef}
                            ref={ref}
                            setChildrenContent={setChildrenContent}
                            className={'playlistNames'}
                            childrenClassName={'playlistNamesItem'}
    />;
});