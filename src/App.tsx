import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css"
import {MainPage} from "./Pages/MainPage/MainPage";
import {LoginPage} from "./Pages/LoginPages/LoginPage";
import {LoginCallback} from "./Pages/LoginPages/LoginCallback";
import {AuthCheck} from "./Components/AuthCheck/AuthCheck";
import {MusicCollectionPage} from "./Pages/MusicCollectionPages/MusicCollectionPage";
import {CollectionType} from "./Pages/MusicCollectionPages/CollectionType";
import {MessageStore} from "./Stores/MessageStore";
import {Messages} from "./Components/Messages/Messages";
import {observer} from "mobx-react-lite";

export const App = observer(() => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/' element={<AuthCheck><MainPage/></AuthCheck>}/>
                    <Route path='/auth-callback' element={<LoginCallback/>}/>
                    <Route path='/collection/playlists'
                           element={<AuthCheck><MusicCollectionPage
                               collectionType={CollectionType.Playlists}/></AuthCheck>}/>
                    <Route path='/collection/albums'
                           element={<AuthCheck><MusicCollectionPage
                               collectionType={CollectionType.Albums}/></AuthCheck>}/>
                </Routes>
                {MessageStore.instance.messages.length !== 0 && <Messages/>}
            </div>
        </Router>
    );
});
