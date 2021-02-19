import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return <div className={s.Posts}>
        <img src='https://sun9-55.userapi.com/impf/c853424/v853424997/ac872/cW5Jd0rrnZA.jpg?size=1080x1080&quality=96&proxy=1&sign=4d8c145dab34bc22a5da2335cd143436&type=album'/>
        {props.message}
        <div className={s.likes}>
            <span>{props.quantityOfLikes}</span>
            <button>Like</button>
        </div>
        </div>
}
export default Posts;