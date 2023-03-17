import React from "react";
import d from "./Messageitem.module.css"
import Dialogs from "../Dialogs";


let MessageItem = (props) => {

    return (
        <div className={d.message}>{props.messageProps}</div>

    );
}

export default MessageItem;