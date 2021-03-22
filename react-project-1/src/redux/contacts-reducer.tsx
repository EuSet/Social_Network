import React from "react";

export type ContactsPageType = {
    contactsData: ContactsDataType
}
export type ContactsDataType = Array<ContactsDataFriendType>
type ContactsDataFriendType = {
    id: number
    location: {country:string, city:string}
    name: string
    avatar: string
    following:boolean
}

const initialState = {
    contactsData: [
        {
            id: 1,
            following:false,
            location:{country:'Belarus',city:'Minsk'},
            name: 'Andrey Petrov',
            avatar: 'https://sun9-55.userapi.com/impf/c853424/v853424997/ac872/cW5Jd0rrnZA.jpg?size=1080x1080&quality=96&proxy=1&sign=4d8c145dab34bc22a5da2335cd143436&type=album'
        },
        {
            id: 2,
            following:false,
            location:{country:'Belarus',city:'Minsk'},
            name: 'Dmitry Ivanov',
            avatar: 'http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-8.jpg'
        }
    ]
}
const FOLLOW = 'FOLLOW'
const contactsReducer = (state:ContactsPageType = initialState, action:any) => {
    switch (action.type) {
        case FOLLOW:
           return {
                ...state,
                contactsData: state.contactsData.map(c => {
                    if(action.idUser === c.id){
                        return {...c,following:!c.following}
                    }
                    return c
                })
            }
        default:
            return state
    }
}
export const followCA = (id:number) => {
    return {type:FOLLOW, idUser:id}
}

export default contactsReducer;