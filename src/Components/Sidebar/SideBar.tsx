import Navbar from "../Navbar/Navbar";
import PlaylistNames from "../PlaylistNames/PlaylistNames";
import "./SideBar.css";
import SpotifyLogo from "./spotify-logo.svg"
import {observer} from "mobx-react-lite";

let SideBar = observer(() => {
    return (
        <aside className="sidebar">
            <img src={SpotifyLogo} className="side-bar__spotify-logo" alt="spotify_logo"/>
            <Navbar/>
            <hr className="side-bar__dividing-line"/>
            <PlaylistNames/>
        </aside>
    )
});

export default SideBar;