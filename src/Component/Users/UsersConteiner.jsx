import React from "react";
import loading from "../Walk.gif"
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
     toggleFollowingProgress,
    unfollow, followThunk,unfollowThunk
} from "../Redux/users-reducer";

import Users from "./Users";
import Preloader from "../components/common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getSuperReselect,
    getTotalUsersCount, getUsersSuperSelector, requestUsers
} from "../Redux/users-selectors";



class UsersContainer extends React.Component {
    componentDidMount() {
       const {currentPage,pageSize} = this.props
this.props.getUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }
    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}

                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={ this.props.followingInProgress}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}


            />
        </>
    }

}


/*const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}*/
const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),


    }
}

/*let withRedirect = withAuthRedirect(UsersContainer)*/
export default compose(
    connect    (mapStateToProps,

        {
            setCurrentPage,
            toggleFollowingProgress,
            getUsers,
            followThunk,
            unfollowThunk,
        }),
    withAuthRedirect
)(UsersContainer)
/*
export default connect    (mapStateToProps,

    {
         setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        followThunk,
        unfollowThunk,
    })               (withRedirect);*/
