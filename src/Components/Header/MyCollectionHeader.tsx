import {observer} from "mobx-react-lite";
import './Header.css';
import CollectionPageLink from "./PageNavs/CollectionPageLink";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import LogoutButton from "./LogoutButton/LogoutButton";
import './PageNavs/PageButtonStyle.css';
import PageNavButton, {PageNavDirection} from "./PageNavs/PageNavButton";

const MyCollectionHeader = observer(() => {
    return <header className="header">
        <PageNavButton pageNavDirection={PageNavDirection.Previous} label='<'/>
        <PageNavButton pageNavDirection={PageNavDirection.Next} label='>'/>
        <CollectionPageLink route='/collection/playlists' text='Плейлисты'/>
        <CollectionPageLink route='/collection/albums' text='Альбомы'/>
        <ProfileMenu/>
        <LogoutButton/>
    </header>
});

export default MyCollectionHeader;