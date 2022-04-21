import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    
    <HashRouter>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    </HashRouter>,
document.getElementById('root')
);