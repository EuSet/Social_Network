import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogitems = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.item + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default Dialogitems;