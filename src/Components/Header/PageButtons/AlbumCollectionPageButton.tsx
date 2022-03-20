import * as React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import './PageButtonStyle.css';
import {observer} from "mobx-react-lite";


const AlbumCollectionPageButton = observer(() => {
    const location = useLocation();
    const navigate = useNavigate();

    function goToAlbums() {
        if (location.pathname !== '/collection/albums')
            navigate('/collection/albums');
    }

    return <button onClick={goToAlbums}
                   className={`albums-button${location.pathname === '/collection/albums' ? ' current-page-button' : ''}`}>
        <label className='page-button__label'>Альбомы</label></button>;
});

export default AlbumCollectionPageButton;
