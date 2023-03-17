import React from "react";
import p from "./JoeSatriani.module.css"
import Post from "../../Profile/MyPosts/Post/Post";
import Song from "./Songs/Song";


const JoeSatrisni = (props) => {




    return (

        <div className={p.grid}>


            <div className={p.a}>
                <div>
                    {props.name}
                </div>
                <div>{props.album}



                </div>
            </div>
            <div className={p.b}>
                <Song none={props.id}/>

            </div>


        </div>
    );
}
export default JoeSatrisni;