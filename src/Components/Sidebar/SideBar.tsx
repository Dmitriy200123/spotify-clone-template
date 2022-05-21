import {Navbar} from "../Navbar/Navbar";
import {PlaylistNames} from "../PlaylistNames/PlaylistNames";
import "./SideBar.css";
import SpotifyLogo from "./spotify-logo.svg"
import {observer} from "mobx-react-lite";
import React from "react";

export const SideBar = observer(() => {
    return (
        <aside className="sidebar">
            <img src={SpotifyLogo} className="sideBar__spotifyLogo" alt="spotify_logo"/>
            <Navbar/>
            <hr className="sideBar__dividingLine"/>
            <div className='sidebar__playlistNames'>
                <label className='playlistNamesLabel'>Плейлисты</label>
                <PlaylistNames/>
            </div>
        </aside>
    )
});