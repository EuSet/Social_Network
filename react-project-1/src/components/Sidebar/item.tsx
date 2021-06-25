import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

type ItemPropsType = {
    link:string
    icon: string
    text:string
}
export const ItemComponent = (props:ItemPropsType) => {
    return <div className={s.itemWrap}>
        <div className={s.item}><NavLink to={`/${props.link}`}><img src={props.icon}/></NavLink>
        </div><div><NavLink to={`/${props.link}`} activeClassName={s.activeLink}><span>{props.text}</span></NavLink></div>
    </div>
}
