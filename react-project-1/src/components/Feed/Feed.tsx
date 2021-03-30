import React from 'react';
import s from './Feed.module.css';
import {NavLink} from "react-router-dom";

export type PropsType = {
    feedsData?: Array<Feeds>
}
type Feeds = {
    id:number,
    title:string,
    avatar:string
}
export const Feed = (props: PropsType) => {
       let FeedsElements =  props.feedsData ?
           props.feedsData.map(f => <div>
                    <NavLink to={'/' + f.id}>
                        <div className={s.feedAvatar}>
                            <img src={f.avatar}/>
                        </div>
                        <div className={s.feedTitle}>
                            {f.title}
                        </div>
                    </NavLink>
                </div>
            ) : 'Feed'
    return <div className={s.feeds}>
        {props.feedsData ? FeedsElements : 'Feed'}
    </div>

}
export default Feed;