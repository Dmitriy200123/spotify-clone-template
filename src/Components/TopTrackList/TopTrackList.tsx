import {observer} from "mobx-react-lite";
import React from "react";
import {MyTopItemsStoreImpl} from "../../Stores/MyTopItemsStore";
import './TopTrackList.css';
import '../ScrollStyle.css';
import {PlayButton} from "../PlayButton/PlayButton";

export const TopTrackList = observer(() => {
    if (MyTopItemsStoreImpl.isFirstFetching) {
        MyTopItemsStoreImpl.setFetching(true);
        MyTopItemsStoreImpl.isFirstFetching = false;
    }

    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollWidth - (e.currentTarget.scrollLeft + e.currentTarget.clientWidth) < 100
            && MyTopItemsStoreImpl.currentUserTopTracks.length < MyTopItemsStoreImpl.totalCount) {
            MyTopItemsStoreImpl.setFetching(true);
        }
    };

    return (
        <div
            className='topTrackList scroll horizontalScroll'
            onScroll={onScroll}>
            {
                MyTopItemsStoreImpl.currentUserTopTracks.map(track => {
                    return <div className='topTrackList__trackListItem' key={track.id}>
                        <img className='trackListItem__image' src={track.imageUrl} alt='trackImage'/>
                        <PlayButton/>
                        <label className='trackListItem__name'>{track.name}</label>
                    </div>
                })
            }
        </div>
    )
});