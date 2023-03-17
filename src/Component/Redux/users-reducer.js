import state from "./State";
import {usersAPI} from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [ ]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
           return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                  return  u
                } )
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return  u
                } )
            }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                 ?  [...state.followingInProgress, action.userId ]:
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
     }
}
export const follow = (userId) => {
    return (
        {type: FOLLOW, userId}
    )
}
export const unfollow = (userId) => {
    return (
        {type: UNFOLLOW, userId}
    )
}
export const setUsers = (users) => {
    return (
        {type: SET_USERS, users}
    )
}
export const setCurrentPage = (currentPage) => {
    return (
        {type: SET_CURRENT_PAGE, currentPage: currentPage}
    )
}
export const setTotalUsersCount = (totalUsersCount) => {
    return (
        {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}
    )
}
export const toggleIsFetching = (isFetching) => {
    return (
        {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
    )
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return (
        {type: TOGGLE_IS_FOLLOWING_PROGRESS,  isFetching, userId}
    )
}

export const getUsers = (currentPage,pageSize) => {
   return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(setCurrentPage(currentPage))
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))

}}
const followUnfollowFlow = async (dispatch, userId) => {

}
export const followThunk = ( userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
      let data = await usersAPI.post(userId);
                if (data.resultCode == 0) {
                    dispatch(follow(userId));
                }
                    dispatch(toggleFollowingProgress(false,userId))
    }}

export const unfollowThunk = ( userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
       let data = await usersAPI.del(userId);
                if (data.resultCode == 0) {
                    dispatch(unfollow(userId));
                }
                dispatch(toggleFollowingProgress(false,userId))
    }}




export default usersReducer;