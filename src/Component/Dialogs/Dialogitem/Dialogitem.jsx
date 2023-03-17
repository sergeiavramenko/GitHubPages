import React from "react";
import d from "./Dialogitem.module.css"
import {NavLink} from "react-router-dom";
import Dialogs from "../Dialogs";

let DialogItem = (props) => {

    return (<div className={d.dialog}>{props.nameProps}
        </div>



    );
}

export default DialogItem;