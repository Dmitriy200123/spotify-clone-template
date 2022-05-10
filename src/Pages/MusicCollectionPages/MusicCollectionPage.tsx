import {observer} from 'mobx-react-lite';
import {MyCollectionHeader} from '../../Components/Header/MyCollectionHeader';
import {SideBar} from '../../Components/Sidebar/SideBar';
import {Footer} from '../../Components/Footer/Footer';
import {IMusicCollectionPageProps} from './IMusicCollectionPageProps';
import {CollectionType} from './CollectionType';
import '../../CommonStyles/PageCommonStyle.css';
import './MusicCollectionPage.css';
import {ItemsCollection} from "../../Components/ItemsCollection/ItemsCollection";
import React from "react";
import {MyAlbumsStore} from "../../Stores/MyAlbumsStore";
import {MyPlaylistsStore} from "../../Stores/MyPlaylistsStore";
import {useIntersectionObserver} from "../../Hooks/useIntersectionObserver";

export const MusicCollectionPage = observer((props: IMusicCollectionPageProps) => {
    const albumsRef = useIntersectionObserver(() => MyAlbumsStore.instance.setFetching(true));

    const playlistsRef = useIntersectionObserver(() => MyPlaylistsStore.instance.setFetching(true));

    return <div className='page'>
        <MyCollectionHeader/>
        <SideBar/>
        <main className='pageContent'>
            {props.collectionType === CollectionType.Albums && <>
                <h1 className='musicCollectionContent__title'>Альбомы</h1>
                <ItemsCollection
                    items={MyAlbumsStore.instance.albums.map(album => ({
                        id: album.id,
                        imageUrl: album.imageUrl,
                        name: album.name,
                        authorName: album.artists.map(artist => artist.name).join('&')
                    }))}
                    ref={albumsRef}
                />
            </>}
            {props.collectionType === CollectionType.Playlists && <>
                <h1 className='musicCollectionContent__title'>Плейлисты</h1>
                <ItemsCollection
                    items={
                        MyPlaylistsStore.instance.currentUserPlaylists.map(playlist => ({
                            id: playlist.id,
                            imageUrl: playlist.imageUrl,
                            name: playlist.name,
                            authorName: `Автор: ${playlist.owner.name}`
                        }))}
                    ref={playlistsRef}
                />
            </>}
        </main>
        <Footer/>
    </div>
});