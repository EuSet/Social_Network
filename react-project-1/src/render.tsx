import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {addPost, StateType, updateNewPostChange} from "./redux/State";

export type PropsType = {
    addPost: () => void
    updateNewPostChange: (newText:string) => void
    state:StateType
}

export const rerenderEntireThree = (state:StateType) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostChange={updateNewPostChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
