import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Feed from "./components/Feed/Feed";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
    return (
        <BrowserRouter>
        <div className='container'>
            <Header/>
            <hr/>
            <div className='wrap'>
                <Sidebar />
                <div className='content'>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
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
