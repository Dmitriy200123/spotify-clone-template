import {observer} from "mobx-react-lite";
import * as React from "react";
import "./Header.css"
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import LogoutButton from "./LogoutButton/LogoutButton";
import PageNavButton, {PageNavDirection} from "./PageNavs/PageNavButton";

const Header = observer(() => {
    return <header className="header">
        <PageNavButton pageNavDirection={PageNavDirection.Previous} label='<'/>
        <PageNavButton pageNavDirection={PageNavDirection.Next} label='>'/>
        <ProfileMenu/>
        <LogoutButton/>
    </header>
});

export default Header;