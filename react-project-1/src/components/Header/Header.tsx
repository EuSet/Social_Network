import React from 'react';
import s from './Header.module.css';
import logo from './../../img/logo.png';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth:boolean
    login:string | null
}

const Header = (props:PropsType) => {
    return  <div className={s.Header}>
        <img src={logo} alt={'#'} />
        <div className={s.logAuth}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
        </div>
    </div>
}

    export default Header;