import React from 'react';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {StateType} from "../../../redux/redux-store";



const mapStateToProps = (state:StateType) => {
    return {
        postsData: state.profilePage.postsData
    }
}
// const mapDispatchToProps = (dispatch:(action:any) => void) => {
//     return {
//
//     }
// }

const MyPostsContainer = connect(mapStateToProps)(MyPosts)

export default MyPostsContainer