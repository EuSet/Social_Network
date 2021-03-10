import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {store} from "./redux/State";


export const rerenderEntireThree = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 addDialogsMessage={store.addDialogsMessage.bind(store)}
                 updateNewPostChange={store.updateNewPostChange.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireThree()
store.subscribe(rerenderEntireThree)
