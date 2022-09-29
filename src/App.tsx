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
import {StoreType} from "./redux/redux-store";

type AppPropsType = {
    store: StoreType
}

function App({store}: AppPropsType) {

    const state = store.getState()

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/messages'}
                           render={() => <Dialogs
                               chats={state.chatsReducer}
                               dispatch={store.dispatch.bind(store)}
                           />}/>
                    <Route path={'/profile'}
                           render={() => <MyProfile
                               profilePage={state.profileReducer}
                               dispatch={store.dispatch.bind(store)}
                           />}/>
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
