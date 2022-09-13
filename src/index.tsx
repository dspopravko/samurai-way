import React from 'react';
import './index.css';
import state, {RootStateType, subscribe} from "./redux/state.js";
import ReactDOM from "react-dom";
import App from "./App";

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>, document.getElementById('root')
    );
}

renderTree()

subscribe(renderTree)