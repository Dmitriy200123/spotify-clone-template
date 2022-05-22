import {observer} from "mobx-react-lite";
import React from "react";
import './TopTrackList.css';
import '../../CommonStyles/ScrollStyle.css';
import {PlayButton} from "../PlayButton/PlayButton";
import {useIntersectionObserver} from "../../Hooks/useIntersectionObserver";
import {MyTopTracksStore} from "../../Stores/MyTopTracksStore";
import {needScrollRef} from "../../ScrollRef/needScrollRef";
import {ICollectionItem} from "../ItemsCollection/ICollectionItem";
import {ScrollDirection} from "../ItemsCollection/ScrollDirection";
import {ItemsCollection} from "../ItemsCollection/ItemsCollection";

export const TopTrackList = observer(() => {
    const needSetRef = needScrollRef(MyTopTracksStore.instance);
    const ref = useIntersectionObserver(() => MyTopTracksStore.instance.setFetching(true));

    const items: Array<ICollectionItem> = MyTopTracksStore.instance.tracks.map(track => ({
        id: track.id,
        name: track.name,
        imageUrl: track.imageUrl,
    }));

    const setChildrenContent = (track: ICollectionItem) => (<>
        <img className='trackListItem__image' src={track.imageUrl} alt='trackImage'/>
        <PlayButton/>
        <label className='trackListItem__name'>{track.name}</label>
    </>);

    return <ItemsCollection items={items}
                            scrollDirection={ScrollDirection.Horizontal}
                            needSetRef={needSetRef}
                            ref={ref}
                            setChildrenContent={setChildrenContent}
                            className={'topTrackList'}
                            childrenClassName={'trackListItem'}
    />;
});