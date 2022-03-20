import {observer} from "mobx-react-lite";
import React from "react";
import MyTopItemsStoreImpl from "../../Stores/MyTopItemsStore";
import './TopTrackList.css';
import '../ScrollStyle.css';
import PlayButton from "../PlayButton/PlayButton";

const TopTrackList = observer(() => {
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
            className='top-track-list scroll horizontal-scroll'
            onScroll={onScroll}>
            {
                MyTopItemsStoreImpl.currentUserTopTracks.map(track => {
                    return <div className='top-track-list__track-list-item' key={track.id}>
                        <img className='track-list-item__image' src={track.imageUrl} alt='trackImage'/>
                        <PlayButton/>
                        <label className='track-list-item__name'>{track.name}</label>
                    </div>
                })
            }
        </div>
    )
});

export default TopTrackList;