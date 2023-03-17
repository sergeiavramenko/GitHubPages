import {createSelectorHook} from "react-redux";
import {createSelector} from "reselect";

export const requestUsers = (state) => {
return state.usersPage.users
}
export const requestUsersSelector = (state) => {
    return requestUsers(state).filter( u => true)
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getUsersSuperSelector = createSelector(requestUsers, getIsFetching,  (users, isFetching) => {
   return  users.filter( u => true)
}  )
