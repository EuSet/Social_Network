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
                avatar: <img src='http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-8.jpg'/>
            }
        ]
    }
}

export default state