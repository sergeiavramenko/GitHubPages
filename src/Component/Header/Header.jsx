import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://images.unsplash.com/photo-1670239509764-98c3d2c2d2ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

            <div className={classes.loginBlock} >
                {props.isAuth? props.login:  <NavLink to="/login" >Login</NavLink>
                }

            </div>

        </header>

    );
}
export default Header;