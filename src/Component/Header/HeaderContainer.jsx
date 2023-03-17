import React from "react";

import Header from "./Header";
import axios from "axios";

import {connect} from "react-redux";
import {getAythUserDataThunk} from "../Redux/ayth-reducer";



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAythUserDataThunk()
          }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, { getAythUserDataThunk})(HeaderContainer);