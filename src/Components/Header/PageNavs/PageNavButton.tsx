import * as React from "react";
import {useNavigate} from "react-router-dom";
import './PageButtonStyle.css';
import {observer} from "mobx-react-lite";

export enum PageNavDirection {
    Previous,
    Next,
}

export interface IPageNavButtonProps {
    pageNavDirection: PageNavDirection,
    label: string,
}

export const PageNavButton = observer((props: IPageNavButtonProps) => {
    const navigate = useNavigate();

    function goToPage(pageNavDirection: PageNavDirection) {
        navigate(pageNavDirection === PageNavDirection.Previous ? -1 : 1);
    }

    return <button onClick={() => goToPage(props.pageNavDirection)} className='pageNavButton'><label
        className='pageNavButton__label'>{props.label}</label></button>;
});
