import {observer} from "mobx-react-lite";
import * as React from "react";
import "./Header.css"
import PreviousPageButton from "./PageButtons/PreviousPageButton";
import NextPageButton from "./PageButtons/NextPageButton";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import LogoutButton from "./LogoutButton/LogoutButton";

const Header = observer(() => {
    return <header className="header">
        <PreviousPageButton/>
        <NextPageButton/>
        <ProfileMenu/>
        <LogoutButton/>
    </header>
});

export default Header;