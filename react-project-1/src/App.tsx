import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Feed from "./components/Feed/Feed";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React from "react";
import ContactsContainer from "./components/Contacts/ContactsContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {StateType} from "./redux/redux-store";
import {Preloader} from "./components/Common/Preloader";

type AppPropsType = {
    initialized:boolean
    initializeApp:() => void
}

class App extends React.Component<AppPropsType> {
    componentDidMount(): void {
        this.props.initializeApp()
        }
    render() {
        if(!this.props.initialized) return <Preloader/>
        return (
            <BrowserRouter>
                <div className='container'>
                    <HeaderContainer/>
                    <hr/>
                    <div className='wrap'>
                        <Sidebar/>
                        <div className='content'>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/feed' render={() => <Feed/>}/>
                            <Route path='/contacts' render={() => <ContactsContainer/>}/>
                            <Route path='/login' render={() => <LoginContainer/>}/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = (state:StateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    // withRouter,
    connect(mapStateToProps,{initializeApp}))(App)



