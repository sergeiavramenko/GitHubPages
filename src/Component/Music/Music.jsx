import React from "react";
import n from './Music.module.css';
import JoeSatrisni from "./JoeSatrisni/JoeSatriani";
import Post from "../Profile/MyPosts/Post/Post";

const Music = (props) => {
    let PostsElement = props.music.JoeSatriani.map( ex => <JoeSatrisni id={ex.id} name={ex.name} album={ex.album} /> )

    return (
    <div >
        {PostsElement}



   </div >
    );
}
export default Music;