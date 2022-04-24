import {observer} from "mobx-react-lite";
import {MyPlaylistsStoreImpl} from "../../Stores/MyPlaylistsStore";
import React from "react";
import {Link} from "react-router-dom";
import './PlaylistNames.css';
import '../ScrollStyle.css';

export const PlaylistNames = observer(() => {
    if (MyPlaylistsStoreImpl.isFirstFetching) {
        MyPlaylistsStoreImpl.setFetching(true);
        MyPlaylistsStoreImpl.isFirstFetching = false;
    }

    const onScroll = (e: React.UIEvent<HTMLUListElement>) => {
        if (e.currentTarget.scrollHeight - (e.currentTarget.scrollTop + e.currentTarget.clientHeight) < 50
            && MyPlaylistsStoreImpl.currentUserPlaylists.length < MyPlaylistsStoreImpl.totalCount) {
            MyPlaylistsStoreImpl.setFetching(true);
        }
    };

    return (
        <div className='sidebar__playlists'>
            <label className='playlists__label'>Плейлисты</label>
            <ul className='playlists scroll verticalScroll'
                onScroll={onScroll}>
                {
                    MyPlaylistsStoreImpl.currentUserPlaylists.map(playlist =>
                        <li key={playlist.id} className='playlists__playlistItem'><Link className='playlist__itemLink'
                                                                                        to={`/collection/playlists/${playlist.id}`}
                                                                                        replace={true}>{playlist.name}</Link>
                        </li>)}
            </ul>
        </div>
    )
});