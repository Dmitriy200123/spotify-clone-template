import {useIntersectionObserver} from "../../../Hooks/useIntersectionObserver";
import {MyAlbumsStore} from "../../../Stores/MyAlbumsStore";
import React from "react";
import {observer} from "mobx-react-lite";
import {setChildrenContent} from "../setChildrenContent";
import '../MusicalCollection.css';
import {needScrollRef} from "../../../ScrollRef/needScrollRef";
import {ICollectionItem} from "../../ItemsCollection/ICollectionItem";
import {ScrollDirection} from "../../ItemsCollection/ScrollDirection";
import {ItemsCollection} from "../../ItemsCollection/ItemsCollection";

export const Albums = observer(() => {
    const needSetRef = needScrollRef(MyAlbumsStore.instance);
    const ref = useIntersectionObserver(() => MyAlbumsStore.instance.setFetching(true));

    const items: Array<ICollectionItem> = MyAlbumsStore.instance.albums.map(album => ({
        id: album.id,
        name: album.name,
        imageUrl: album.imageUrl,
        authorName: album.artists.map(artist => artist.name).join('&')
    }));

    return <ItemsCollection items={items}
                            scrollDirection={ScrollDirection.Vertical}
                            needSetRef={needSetRef}
                            ref={ref}
                            setChildrenContent={setChildrenContent}
                            className={'musicalCollection'}
                            childrenClassName={'musicalCollectionItem'}/>;
});