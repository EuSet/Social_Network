import {addNewPostThunk, addPost,} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

const mapStateToProps = (state:StateType) => {
    return {
    }
}
// const mapDispatchToProps = (dispatch:(action:ProfileActionType | FormAction) => void) => {
//     return {
//         addPost: (newPost:string) => {
//             dispatch(addPost(newPost))
//         },
//         onPostChange: (createNewPost:string) => {
//             dispatch(onPostChange(createNewPost))
//         },
//         addNewPost: (newPost:string) => {
//             dispatch(addNewPostThunk(newPost))
//         }
//     }
// }

const NewPostContainer = connect(mapStateToProps, {addPost, addNewPostThunk})(NewPost)
export default NewPostContainer;
