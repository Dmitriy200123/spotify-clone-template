import {MyCollectionHeader} from '../../Components/Header/MyCollectionHeader';
import {SideBar} from '../../Components/Sidebar/SideBar';
import {Footer} from '../../Components/Footer/Footer';
import {IMusicCollectionPageProps} from './IMusicCollectionPageProps';
import {CollectionType} from './CollectionType';
import '../../CommonStyles/PageCommonStyle.css';
import './MusicCollectionPage.css';
import React from "react";
import {Playlists} from "../../Components/MusicalCollection/Playlists/Playlists";
import {Albums} from "../../Components/MusicalCollection/Albums/Albums";
import {PlaylistsViewType} from "../../Components/MusicalCollection/Playlists/PlaylistsViewType";

export const MusicCollectionPage = (props: IMusicCollectionPageProps) => {
    return <div className='page'>
        <MyCollectionHeader/>
        <SideBar/>
        <main className='pageContent'>
            {props.collectionType === CollectionType.Albums && <>
                <h1 className='musicCollectionContent__title'>Альбомы</h1>
                <Albums/>
            </>}
            {props.collectionType === CollectionType.Playlists && <>
                <h1 className='musicCollectionContent__title'>Плейлисты</h1>
                <Playlists viewType={PlaylistsViewType.Card}/>
            </>}
        </main>
        <Footer/>
    </div>
};