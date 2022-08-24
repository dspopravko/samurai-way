import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './components/Header/Header';
import Header from "./components/Header/Header";
import Navbar from "./components/Sidebar/Navbar";
import {MyProfile} from "./components/content/Profile/MyProfile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/content/Music/Music";
import {News} from "./components/content/News/News";
import {Settings} from "./components/content/Settings/Settings";
import {Notes} from "./components/content/Notes/Notes";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/messages'} component={Dialogs}/>
                    <Route path={'/profile'} component={MyProfile}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/notes'} component={Notes}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
                <Navbar/>
            </div>
        </BrowserRouter>

    );
}

export default App;
