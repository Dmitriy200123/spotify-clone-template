import {observer} from "mobx-react-lite";
import MyPlaylistsStoreImpl from "../../Stores/MyPlaylistsStore";
import React from "react";
import './Playlists.css';
import '../ScrollStyle.css';
import PlayButton from "../PlayButton/PlayButton";

const Playlists = observer(() => {
    if (MyPlaylistsStoreImpl.isFirstFetching) {
        MyPlaylistsStoreImpl.setFetching(true);
        MyPlaylistsStoreImpl.isFirstFetching = false;
    }

    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollHeight - (e.currentTarget.scrollTop + e.currentTarget.clientHeight) < 50
            && MyPlaylistsStoreImpl.currentUserPlaylists.length < MyPlaylistsStoreImpl.totalCount) {
            MyPlaylistsStoreImpl.setFetching(true);
        }
    };

    return <div
        className='collection-playlists scroll vertical-scroll'
        onScroll={onScroll}>
        {
            MyPlaylistsStoreImpl.currentUserPlaylists.map(playlist => {
                return <div className='collection-playlists__playlist-item' key={playlist.id}>
                    <img className='playlist-item__image' src={playlist.imageUrl} alt='trackImage'/>
                    <PlayButton/>
                    <label className='playlist-item__name'>{playlist.name}</label>
                    <label className='playlist-item__author-name'>{'Автор: ' + playlist.owner.name}</label>
                </div>
            })
        }
    </div>
});

export default Playlists;