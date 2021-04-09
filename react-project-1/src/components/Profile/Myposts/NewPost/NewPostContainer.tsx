import React from 'react';
import {
    addPostCreateActions,
    onPostChangeCreateAction, ProfileActionType,
} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

const mapStateToProps = (state:StateType) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:(action:ProfileActionType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostCreateActions())
        },
        onPostChange: (createNewPost:string) => {
            dispatch(onPostChangeCreateAction(createNewPost))
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)
export default NewPostContainer;