import {useIntersectionObserver} from "../../../Hooks/useIntersectionObserver";
import React from "react";
import {MyPlaylistsStore} from "../../../Stores/MyPlaylistsStore";
import {observer} from "mobx-react-lite";
import '../MusicalCollection.css';
import {needScrollRef} from "../../../ScrollRef/needScrollRef";
import {ICollectionItem} from "../../ItemsCollection/ICollectionItem";
import {ItemsCollection} from "../../ItemsCollection/ItemsCollection";
import {ScrollDirection} from "../../ItemsCollection/ScrollDirection";
import {IPlaylistsProps} from "./IPlaylistsProps";
import {PlaylistsViewType} from "./PlaylistsViewType";
import {Link} from "react-router-dom";
import {setChildrenContent} from "../setChildrenContent";
import './PlaylistNames.css';

export const Playlists = observer((props: IPlaylistsProps) => {
    const needSetRef = needScrollRef(MyPlaylistsStore.instance);
    const ref = useIntersectionObserver(() => MyPlaylistsStore.instance.setFetching(true));

    const items: Array<ICollectionItem> = MyPlaylistsStore.instance.playlists.map(playlist => ({
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.imageUrl,
        authorName: `Автор: ${playlist.owner.name}`
    }));

    if (props.viewType === PlaylistsViewType.Card) {
        return <ItemsCollection items={items}
                                scrollDirection={ScrollDirection.Vertical}
                                needSetRef={needSetRef}
                                ref={ref}
                                setChildrenContent={setChildrenContent}
                                className='musicalCollection'
                                childrenClassName='musicalCollectionItem'/>;
    }

    const setChildrenOnlyNamesContent = (item: ICollectionItem) => <Link className='playlistNamesItem__link'
                                                                         to=''>{item.name}</Link>;
    return <ItemsCollection items={items}
                            scrollDirection={ScrollDirection.Vertical}
                            needSetRef={needSetRef}
                            ref={ref}
                            setChildrenContent={setChildrenOnlyNamesContent}
                            className='playlistNames'
                            childrenClassName='playlistNamesItem'
    />;
});