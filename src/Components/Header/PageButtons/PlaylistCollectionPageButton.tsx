import * as React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import './PageButtonStyle.css';
import {observer} from "mobx-react-lite";


const PlaylistCollectionPageButton = observer(() => {
    const location = useLocation();
    const navigate = useNavigate();

    function goToPlaylists() {
        if (location.pathname !== '/collection/playlists')
            navigate('/collection/playlists');
    }

    return <button onClick={goToPlaylists}
                   className={`playlists-button${location.pathname === '/collection/playlists' ? ' current-page-button' : ''}`}>
        <label className='page-button__label'>Плейлисты</label></button>;
});

export default PlaylistCollectionPageButton;
