import * as React from "react";
import {useNavigate} from "react-router-dom";
import './PageButtonStyle.css';
import {observer} from "mobx-react-lite";


const NextPageButton = observer(() => {
    const navigate = useNavigate();

    function goToNextPage() {
        navigate(1);
    }

    return <button onClick={goToNextPage} className='next-page-button'><label
        className='page-button__label'>{'>'}</label></button>;
});

export default NextPageButton;
