import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import { store } from "./store/configStore";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Provider store = {store}>
           <App/>  
        </Provider>
    </Router>, 
    document.getElementById("root")
);