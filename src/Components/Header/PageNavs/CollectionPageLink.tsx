import * as React from "react";
import {NavLink} from "react-router-dom";
import './PageButtonStyle.css';
import {observer} from "mobx-react-lite";

export interface ICollectionPageLinkProps {
    route: string,
    text: string,
}

export const CollectionPageLink = observer((props: ICollectionPageLinkProps) => {
    return <NavLink to={props.route}
                    className={({isActive}) => isActive ? 'collectionNavItem currentPage-visible' : 'collectionNavItem'}>{props.text}</NavLink>;
});
