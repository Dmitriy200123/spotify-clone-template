import Header from "../../Components/Header/Header";
import SideBar from "../../Components/Sidebar/SideBar";
import Footer from "../../Components/Footer/Footer";
import React, {useEffect} from 'react';
import {autorun} from "mobx";
import {useParams} from "react-router-dom";
import PlaylistStoreImpl from "../../Stores/PlaylistStore";
import './PlaylistPage.css'
import {observer} from 'mobx-react-lite';

const PlaylistPage = observer(() => {
    // const {id} = useParams();
    // useEffect(() => {
    //     PlaylistStoreImpl.reset();
    // }, [id])
    // const playlistId = id as string;
    //
    // const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    //     if (e.currentTarget.scrollHeight - (e.currentTarget.scrollTop + e.currentTarget.clientHeight) < 50 && PlaylistStoreImpl.tracks.length < PlaylistStoreImpl.totalCount) {
    //         PlaylistStoreImpl.setFetching(true);
    //     }
    // }
    //
    // useEffect(() => {
    //     PlaylistStoreImpl.getPlaylist(playlistId);
    // }, [playlistId])
    //
    // useEffect(() => autorun(() => {
    //     if (PlaylistStoreImpl.needFetching) {
    //         PlaylistStoreImpl.getTracks(playlistId, PlaylistStoreImpl.offset).finally(() => PlaylistStoreImpl.setFetching(false));
    //     }
    // }), [playlistId])
    //
    // return (
    //     <div className='playlist-page'>
    //         <Header/>
    //         <SideBar/>
    //         <div className='playlist'>
    //             <div className='playlist__playlist-info'>
    //                 <img className='playlist-info__image' src={PlaylistStoreImpl.playlist.imageUrl} alt="playlistLogo"/>
    //                 <span className='playlist-info__type'>Плейлист</span>
    //                 <h1 className='playlist-info__name'>{PlaylistStoreImpl.playlist.name}</h1>
    //                 <span className='playlist-info__author'>{PlaylistStoreImpl.playlist.owner.name}</span>
    //                 <span className='playlist-info__tracks-count'>{`${PlaylistStoreImpl.totalCount} треков`}</span>
    //             </div>
    //             <div className='playlist__controls'>
    //                 кнопки: воспроизвести, добавить в любимые, три точки
    //             </div>
    //             <div className={'playlist__tracks playlist__tracks-scroll'} onScroll={onScroll}>
    //                 {PlaylistStoreImpl.tracks.map((track, index) => {
    //                     return <div key={track.id} className='tracks__track-number'>{index + 1}</div>
    //                     // {/*<div key={track.id} className='tracks__track-name'>{track.name}</div>*/}
    //                     // {/*<div key={track.id} className='tracks__track-duration'>time</div>*/}
    //
    //                 })}
    //             </div>
    //         </div>
    //         <Footer/>
    //     </div>
    // )
    // todo
    return <></>
});

export default PlaylistPage;