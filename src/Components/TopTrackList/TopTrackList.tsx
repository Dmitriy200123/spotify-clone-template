import {observer} from "mobx-react-lite";
import React from "react";
import './TopTrackList.css';
import '../../CommonStyles/ScrollStyle.css';
import {PlayButton} from "../PlayButton/PlayButton";
import {useIntersectionObserver} from "../../Hooks/useIntersectionObserver";
import {MyTopTracksStore} from "../../Stores/MyTopTracksStore";

export const TopTrackList = observer(() => {
    const ref = useIntersectionObserver(() => MyTopTracksStore.instance.setFetching(true));

    return (
        <div className='topTrackList scroll horizontalScroll'>
            {
                MyTopTracksStore.instance.currentUserTopTracks.map((track, index) => {
                    return <div ref={index === MyTopTracksStore.instance.currentUserTopTracks.length - 1
                    && !MyTopTracksStore.instance.needFetching && MyTopTracksStore.instance.offset <= MyTopTracksStore.instance.totalCount ? ref : null}
                                className='topTrackList__trackListItem' key={track.id}>
                        <img className='trackListItem__image' src={track.imageUrl} alt='trackImage'/>
                        <PlayButton/>
                        <label className='trackListItem__name'>{track.name}</label>
                    </div>
                })
            }
        </div>
    )
});