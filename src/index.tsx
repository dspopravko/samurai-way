import React from 'react';
import './index.css';
import store from "./redux/state.js";
import ReactDOM from "react-dom";
import App from "./App";

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>, document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree)