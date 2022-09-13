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
import state from "./redux/state.js";
import {addPost, addLike, postInputHandler} from "./redux/state.js";


function App() {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/messages'} render={() => <Dialogs chats={state.chats}/>}/>
                    <Route path={'/profile'}
                           render={() => <MyProfile
                               addLike={addLike}
                               addPost={addPost}
                               postInputHandler={postInputHandler}
                               profilePage={state.profilePage}/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/notes'} render={() => <Notes/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
                <Navbar/>
            </div>

        </BrowserRouter>


    );
}

export default App;
