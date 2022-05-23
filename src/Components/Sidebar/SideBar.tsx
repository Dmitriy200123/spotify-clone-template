import {Navbar} from "../Navbar/Navbar";
import "./SideBar.css";
import SpotifyLogo from "./spotify-logo.svg"
import {observer} from "mobx-react-lite";
import React from "react";
import {Playlists} from "../MusicalCollection/Playlists/Playlists";
import {PlaylistsViewType} from "../MusicalCollection/Playlists/PlaylistsViewType";

export const SideBar = observer(() => {
    return (
        <aside className="sidebar">
            <img src={SpotifyLogo} className="sideBar__spotifyLogo" alt="spotify_logo"/>
            <Navbar/>
            <hr className="sideBar__dividingLine"/>
            <div className='sidebar__playlistNames'>
                <label className='playlistNamesLabel'>Плейлисты</label>
                <Playlists viewType={PlaylistsViewType.OnlyName}/>
            </div>
        </aside>
    )
});