import React from 'react';
import ReactDOM from "react-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


