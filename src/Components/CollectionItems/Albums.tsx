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
        className='collection-albums scroll vertical-scroll'
        onScroll={onScroll}>
        {
            MyAlbumsStoreImpl.albums.map(album => {
                return <div className='collection-albums__album-item' key={album.id}>
                    <img className='album-item__image' src={album.imageUrl} alt='albumImage'/>
                    <PlayButton/>
                    <label className='album-item__name'>{album.name}</label>
                    <label
                        className='album-item__author-name'>{album.artists.map(artist => artist.name).join('&')}</label>
                </div>
            })
        }
    </div>
});

export default Albums;