import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './components/Header/Header';
import Navbar from "./components/Sidebar/Navbar";
import {ProfileContainer} from "./components/content/Profile/ProfileContainer";
import {Music} from "./components/content/Music/Music";
import {News} from "./components/content/News/News";
import {Settings} from "./components/content/Settings/Settings";
import {Notes} from "./components/content/Notes/Notes";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer
                           />}/>
                    <Route path={'/messages'}
                           render={() => <DialogsContainer
                           />}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/notes'} render={() => <Notes/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
                <Navbar/>
            </div>

        </BrowserRouter>


    );
}

export default App;
