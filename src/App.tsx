import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './components/Header/Header';
import Header from "./components/Header/Header";
import Navbar from "./components/Sidebar/Navbar";
import {MyProfile} from "./components/content/Profile/MyProfile";
import {Music} from "./components/content/Music/Music";
import {News} from "./components/content/News/News";
import {Settings} from "./components/content/Settings/Settings";
import {Notes} from "./components/content/Notes/Notes";
import {StoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/Users.container";

type AppPropsType = {
    store: StoreType
}

function App({store}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'}
                           render={() => <MyProfile
                               store={store}
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
                </div>
                <Navbar/>
            </div>

        </BrowserRouter>


    );
}

export default App;
