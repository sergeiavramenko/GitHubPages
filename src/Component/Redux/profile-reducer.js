import state from "./State";
import {profileAPI, usersAPI} from "../../api/api";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
 let initialState ={
     posts: [
         {name: "Dimasdasdasd", id: "1", likesCount: 112},
         {name: "Andr", id: "2", likesCount: 90}
     ],
     newPostText: "IT-Incubato",
     profile: null,
     status: "",
 }


const profileReducer = (state = initialState , action) => {
   switch (action.type) {
       case ADD_POST: {
           let newPost = {name: state.newPostText, id: "8", likesCount: 1};
           return {
               ...state,
               posts: [...state.posts, newPost],
               newPostText: ""
           };
       }
       case SET_USER_PROFILE: {
          return {
              ...state,
              profile: action.profile
          }
   }
       case UPDATE_NEW_POST_TEXT: {
           return {
               ...state,
               newPostText: action.newText
           }
       }
       case SET_STATUS: {
           return {
               ...state,
               status: action.status
           }
       }
       default:
       return state;
       }
}

export const addPostActionCreator = () => {
    return(
        {type: ADD_POST}
    )
}
export const updateNewPostTextActionCreator = (text) => {
    return(
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}
export const setUserProfile = (profile) => {
    return(
        {type: SET_USER_PROFILE, profile}
    )
}
export const setStatus = (status) => {
    return(
        {type: SET_STATUS, status}
    )
}
export const getUserProfileThunk = (userId) => {
    return  async (dispatch) => {
        const res = await usersAPI.getProfile(userId);
            dispatch(setUserProfile(res.data))

    }
}
export const getStatus = (userId) => {
    return  async (dispatch) => {
       let res = await profileAPI.getStatus(userId)
            dispatch(setStatus(res.data))
    }
}
export const updateStatus = (status) => {
    return  async (dispatch) => {
      let res = await profileAPI.updateStatus(status)
                if (res.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
    }
}



export default profileReducer;






