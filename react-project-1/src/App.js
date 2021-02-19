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

function App() {
    return (
        <BrowserRouter>
        <div className='container'>
            <Header/>
            <div className='wrap'>
                <Sidebar/>
                <div className='content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/feed' component={Feed}/>
                </div>
            </div>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
