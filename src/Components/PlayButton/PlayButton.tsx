import React from "react";
import './PlayButton.css';
import {observer} from "mobx-react-lite";

const PlayButton = observer(() => (<button className='playButton'>
    <svg className="playButton__image" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24">
        <path d="M3 22v-20l18 10-18 10z"/>
    </svg>
</button>));

export default PlayButton;