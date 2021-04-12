import React from 'react';
import s from './Header.module.css';
import logo from './../../img/logo.png';
import {NavLink} from "react-router-dom";

const Header = (props:any) => {
    debugger
    return  <div className={s.Header}>
        <img src={logo} alt={'#'} />
        <div className={s.logAuth}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
        </div>
    </div>
}

    export default Header;