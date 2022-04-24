import {observer} from "mobx-react-lite";
import * as React from "react";
import "./Header.css"
import {ProfileMenu} from "./ProfileMenu/ProfileMenu";
import {PageNavButton} from "./PageNavs/PageNavButton";
import {PageNavDirection} from "./PageNavs/PageNavButton";
import {LogoutButton} from "./LogoutButton/LogoutButton";

export const Header = observer(() => {
    return <header className="header">
        <PageNavButton pageNavDirection={PageNavDirection.Previous} label='<'/>
        <PageNavButton pageNavDirection={PageNavDirection.Next} label='>'/>
        <ProfileMenu/>
        <LogoutButton/>
    </header>
});