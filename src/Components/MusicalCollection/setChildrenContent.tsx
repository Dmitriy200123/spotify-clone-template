import {ICollectionItem} from "../ItemsCollection/ItemsCollection";
import {PlayButton} from "../PlayButton/PlayButton";
import React from "react";

export const setChildrenContent = (item: ICollectionItem) => (
    <>
        <PlayButton/>
        <img className='musicalCollectionItem__image' src={item.imageUrl} alt='musicalCollectionItemImage'/>
        <PlayButton/>
        <label className='musicalCollectionItem__name'>{item.name}</label>
        <label className='musicalCollectionItem__authorName'>{item.authorName}</label>
    </>
);