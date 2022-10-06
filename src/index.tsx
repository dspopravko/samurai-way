import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </React.StrictMode>, document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree)