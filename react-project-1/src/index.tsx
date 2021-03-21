import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {store} from "./redux/redux-store";
import {StateType} from "./redux/Store";
import {Provider} from "react-redux";


export const rerenderEntireThree = (state:StateType) =>{
    ReactDOM.render(
        <React.StrictMode>
                <Provider store={store}>
            <App />
                </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireThree(state)
})
