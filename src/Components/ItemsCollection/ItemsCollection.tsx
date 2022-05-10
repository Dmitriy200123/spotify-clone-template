import {PlayButton} from "../PlayButton/PlayButton";
import React, {ForwardedRef, forwardRef} from "react";
import '../../CommonStyles/ScrollStyle.css';
import './ItemsCollection.css';
import {MyPlaylistsStore} from "../../Stores/MyPlaylistsStore";
import {observer} from "mobx-react-lite";


export interface ICollectionItem {
    id: string,
    imageUrl: string,
    name: string,
    authorName: string,
}

export interface IItemsCollectionProps {
    items: Array<ICollectionItem>,
}

export const ItemsCollection = observer(forwardRef((props: IItemsCollectionProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <div className='collectionItems scroll verticalScroll'> {props.items.map((item, index) => {
        return <div className='collectionItems__collectionItem' key={item.id}
                    ref={index === MyPlaylistsStore.instance.currentUserPlaylists.length - 1
                    && !MyPlaylistsStore.instance.needFetching && MyPlaylistsStore.instance.offset <= MyPlaylistsStore.instance.totalCount ? ref : null}>
            <img className='collectionItem__image' src={item.imageUrl} alt='collectionItemImage'/>
            <PlayButton/>
            <label className='collectionItem__name'>{item.name}</label>
            <label className='collectionItem__authorName'>{item.authorName}</label>
        </div>
    })}
    </div>
}));

