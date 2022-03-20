import {observer} from "mobx-react-lite";
import MyPlaylistsStoreImpl from "../../Stores/MyPlaylistsStore";
import React from "react";
import {Link} from "react-router-dom";
import './PlaylistNames.css';
import '../ScrollStyle.css';

const PlaylistNames = observer(() => {
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
            <ul className='playlists scroll vertical-scroll'
                onScroll={onScroll}>
                {
                    MyPlaylistsStoreImpl.currentUserPlaylists.map(playlist =>
                        <li key={playlist.id} className='playlists__playlist-item'><Link className='playlist-item_link'
                                                                                         to={`/collection/playlists/${playlist.id}`}
                                                                                         replace={true}>{playlist.name}</Link>
                        </li>)}
            </ul>
        </div>
    )
});

export default PlaylistNames;