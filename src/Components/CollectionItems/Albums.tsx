import {observer} from "mobx-react-lite";
import React from "react";
import MyAlbumsStoreImpl from "../../Stores/MyAlbumsStore";
import './Albums.css';
import '../ScrollStyle.css';
import PlayButton from "../PlayButton/PlayButton";

const Albums = observer(() => {
    if (MyAlbumsStoreImpl.isFirstFetching) {
        MyAlbumsStoreImpl.setFetching(true);
        MyAlbumsStoreImpl.isFirstFetching = false;
    }

    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollHeight - (e.currentTarget.scrollTop + e.currentTarget.clientHeight) < 50
            && MyAlbumsStoreImpl.albums.length < MyAlbumsStoreImpl.totalCount) {
            MyAlbumsStoreImpl.setFetching(true);
        }
    };

    return <div
        className='collection-albums scroll verticalScroll'
        onScroll={onScroll}>
        {
            MyAlbumsStoreImpl.albums.map(album => {
                return <div className='collection-albums__albumItem' key={album.id}>
                    <img className='albumItem__image' src={album.imageUrl} alt='albumImage'/>
                    <PlayButton/>
                    <label className='albumItem__name'>{album.name}</label>
                    <label
                        className='albumItem__authorName'>{album.artists.map(artist => artist.name).join('&')}</label>
                </div>
            })
        }
    </div>
});

export default Albums;