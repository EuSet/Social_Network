import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    name:string
    id:number
}
const Dialogitems = (props:PropsType) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.item + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default Dialogitems;