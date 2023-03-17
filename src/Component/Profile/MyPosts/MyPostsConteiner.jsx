import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        click: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostConteiner;