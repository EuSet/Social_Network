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
import {PropsType} from "./render";


function App(props:PropsType) {
    return (
        <BrowserRouter>
        <div className='container'>
            <Header/>
            <hr/>
            <div className='wrap'>
                <Sidebar sidebarPage={props.state.sidebarPage}/>
                <div className='content'>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostChange={props.updateNewPostChange}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={props.state.dialogsPage}/>}/>
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
