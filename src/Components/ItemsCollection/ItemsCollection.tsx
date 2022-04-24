import {observer} from "mobx-react-lite";
import {PlayButton} from "../PlayButton/PlayButton";
import React from "react";
import '../ScrollStyle.css';
import './ItemsCollection.css';


export interface ICollectionItem {
    id: string,
    imageUrl: string,
    name: string,
    authorName: string,
}

export interface IItemsCollectionProps {
    items: Array<ICollectionItem>,
    onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

export const ItemsCollection = observer((props: IItemsCollectionProps) => {
    return <div className='collectionItems scroll verticalScroll' onScroll={props.onScroll}> {props.items.map(item => {
        return <div className='collectionItems__collectionItem' key={item.id}>
            <img className='collectionItem__image' src={item.imageUrl} alt='collectionItemImage'/>
            <PlayButton/>
            <label className='collectionItem__name'>{item.name}</label>
            <label className='collectionItem__authorName'>{item.authorName}</label>
        </div>
    })}
    </div>
});

