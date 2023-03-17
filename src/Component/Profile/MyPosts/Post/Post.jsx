import React from "react";
import p from './Post.module.css';


const Post = (props) => {
    return (
        


        <div className={p.item}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/e/eb/Ralf_logo.jpg" />

            <div><span> {props.likesCount}</span> </div>

            <div>
                {props.message}
            </div>




        </div> 



    );
}
export default Post; 