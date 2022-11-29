import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducer/rootReducer";
import './index.css';
import App from './App';

const store = configureStore({reducer: rootReducer})
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
