import * as React from "react";
import {useNavigate} from "react-router-dom";
import './PageButtonStyle.css';
import {observer} from "mobx-react-lite";


const PreviousPageButton = observer(() => {
    const navigate = useNavigate();

    function goToPreviousPage() {
        navigate(-1);
    }

    return <button onClick={goToPreviousPage} className='previous-page-button'><label
        className='page-button__label'>{'<'}</label></button>
});

export default PreviousPageButton;
