import React from "react";

import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileThunk, updateStatus} from "../Redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId =28007;
        }
        this.props.getUserProfileThunk(userId)
        this.props.getStatus(userId)
    }

    render() {
                return (
            <div>
                <Profile  {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = (props) => {
    return (<AuthRedirectComponent {...props} params={useParams()}/>
    )
}
export default  connect(mapStateToProps, {getUserProfileThunk, getStatus, updateStatus})(WithUrlDataContainerComponent);
