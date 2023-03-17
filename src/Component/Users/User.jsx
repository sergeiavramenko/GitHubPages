import React from "react";
import styles from "./users.module.css";
import userPhoto from "../images.png";
import {NavLink} from "react-router-dom";
import n from "../NavBar/NavBar.module.css";
import Paginator from "../components/common/Paginator/Paginator";



let User = ({user,followingInProgress,unfollowThunk,followThunk }) => {
let u = user;
    return (
    <div >
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id} className = { navData => navData.isActive ? n.active : n.item }>

                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                               alt="sadas"/>
                        </NavLink>
                        </div>
                    <div>
                        {u.followed ?
                            <button disabled={followingInProgress.some( id => id === u.id)}
                                    onClick={() => { unfollowThunk(u.id)
                            }}>Unfollow</button> :

                            <button disabled={followingInProgress.some( id => id === u.id)}
                                    onClick={() => { followThunk(u.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span> <div>{u.name}</div>
                        <div>{u.status}</div></span>
                    <span> <div>u.location.city</div>
                        <div>u.location.country</div></span>
                </span>

            </div>)

}
export default User