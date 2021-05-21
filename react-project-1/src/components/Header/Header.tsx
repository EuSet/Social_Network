import React from 'react';
import s from './Header.module.css';
import logo from './../../img/logo.png';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth:boolean
    login:string | null
    signOut:() => void
}

const Header = (props:PropsType) => {
    return  <div className={s.Header}>
        <img src={logo} alt={'#'} />
        <div className={s.logAuth}>
            {props.isAuth ?
                <div>
                    <span>{props.login}</span>
                    <button onClick={() => {props.signOut()}}>log out</button>
                </div>

                : <NavLink to={'/login'}>login</NavLink>}
        </div>
    </div>
}

    export default Header;
