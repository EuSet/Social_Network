import React from "react";

let state = {
    dialogsPage:{
        dialogsData:[
            {name:'Andrey', id:1},
            {name:'Eugene', id:2},
            {name:'Dimych', id:3},
            {name:'Diana', id:4}
        ],
        messagesData:[
            {message:'Hi', id:0},
            {message:'How are you', id:1},
            {message:'im here', id:2}
        ]
    },
    profilePage:{
        postsData:[
            {message: 'Hi, how are you', quantityOfLikes: 10},
            {message: 'It\'s my first post', quantityOfLikes: 17},
        ],
    },
    sidebarPage:{
        contactsData:[
            {
                id: 'andrey',
                name: 'Andrey Petrov',
                avatar:  'https://sun9-55.userapi.com/impf/c853424/v853424997/ac872/cW5Jd0rrnZA.jpg?size=1080x1080&quality=96&proxy=1&sign=4d8c145dab34bc22a5da2335cd143436&type=album'
            },
            {
                id: 'andrey',
                name: 'Dmitry Ivanov',
                avatar: 'http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-8.jpg'
            }
        ]
    }
}

export default state