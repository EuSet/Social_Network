import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Feed from "./components/Feed/Feed";

function App(props) {
    return (
        <BrowserRouter>
        <div className='container'>
            <Header/>
            <div className='wrap'>
                <Sidebar state={props.state.sidebarPage}/>
                <div className='content'>
                    <Route path='/profile' render={() => <Profile
                        state={props.state.profilePage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.state.dialogsPage}/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                </div>
            </div>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
