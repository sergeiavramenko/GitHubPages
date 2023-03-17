import React, {useState} from "react";

const Musicc = (props) => {

    const [music, setMusic] = useState([
        {id:1, songs: "WebStorm", dlitelnost:220},
        {id:2, songs: "next", dlitelnost:220},
        {id:3, songs: "Teers", dlitelnost:220},
        {id:4, songs: "Mental", dlitelnost:220},
    ])

    return (
        <div>
            {music.map((e) => <li> {e.songs} </li> ) }



        </div >
    );
}
export default Musicc;