import React from 'react';
import s from './Header.module.css';
import logo from './../../img/logo.png';

const Header = () => {
    return  <div className={s.Header}>
        <img src={logo} alt={'#'} />
    </div>
}

    export default Header;