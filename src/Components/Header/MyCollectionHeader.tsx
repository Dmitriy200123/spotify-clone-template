import {observer} from "mobx-react-lite";
import './MyCollectionHeader.css';
import PreviousPageButton from "./PageButtons/PreviousPageButton";
import NextPageButton from "./PageButtons/NextPageButton";
import PlaylistCollectionPageButton from "./PageButtons/PlaylistCollectionPageButton";
import AlbumCollectionPageButton from "./PageButtons/AlbumCollectionPageButton";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import LogoutButton from "./LogoutButton/LogoutButton";

const MyCollectionHeader = observer(() => {
    return <header className="header">
        <PreviousPageButton/>
        <NextPageButton/>
        <PlaylistCollectionPageButton/>
        <AlbumCollectionPageButton/>
        <ProfileMenu/>
        <LogoutButton/>
    </header>
});

export default MyCollectionHeader;