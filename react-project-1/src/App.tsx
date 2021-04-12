import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Feed from "./components/Feed/Feed";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React from "react";
import ContactsContainer from "./components/Contacts/ContactsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

function App() {
    return (
        <BrowserRouter>
        <div className='container'>
            <Header/>
            <hr/>
            <div className='wrap'>
                <Sidebar />
                <div className='content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                    <Route path='/contacts' render={() => <ContactsContainer/>}/>
                </div>
            </div>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
