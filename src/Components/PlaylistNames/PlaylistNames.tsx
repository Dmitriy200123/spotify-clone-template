import {observer} from "mobx-react-lite";
import {MyPlaylistsStore} from "../../Stores/MyPlaylistsStore";
import React from "react";
import {Link} from "react-router-dom";
import './PlaylistNames.css';
import '../../CommonStyles/ScrollStyle.css';
import {useIntersectionObserver} from "../../Hooks/useIntersectionObserver";

export const PlaylistNames = observer(() => {
    const playlistsRef = useIntersectionObserver(() => MyPlaylistsStore.instance.setFetching(true));

    return (
        <div className='sidebar__playlists'>
            <label className='playlists__label'>Плейлисты</label>
            <ul className='playlists scroll verticalScroll'>
                {
                    MyPlaylistsStore.instance.currentUserPlaylists.map((playlist, index) =>
                        <li key={playlist.id} className='playlists__playlistItem'
                            ref={index === MyPlaylistsStore.instance.currentUserPlaylists.length - 1
                            && !MyPlaylistsStore.instance.needFetching && MyPlaylistsStore.instance.offset <= MyPlaylistsStore.instance.totalCount ? playlistsRef : null}>
                            <Link className='playlist__itemLink'
                                  to={`/collection/playlists/${playlist.id}`}>{playlist.name}</Link>
                        </li>)
                }
            </ul>
        </div>
    )
});