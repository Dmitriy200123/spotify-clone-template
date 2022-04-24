import {Navbar} from "../Navbar/Navbar";
import {PlaylistNames} from "../PlaylistNames/PlaylistNames";
import "./SideBar.css";
import SpotifyLogo from "./spotify-logo.svg"
import {observer} from "mobx-react-lite";

export const SideBar = observer(() => {
    return (
        <aside className="sidebar">
            <img src={SpotifyLogo} className="sideBar__spotifyLogo" alt="spotify_logo"/>
            <Navbar/>
            <hr className="sideBar__dividingLine"/>
            <PlaylistNames/>
        </aside>
    )
});