import React from 'react';
import avatarstyle from "../../styles/Avatar.module.css"
export default function Avatar(props) {
    return (
        <div className={avatarstyle.ext_div}>
            <div >
                <img className={avatarstyle.imgstyle} src={props.url}></img>
                <h2>{props.user}</h2>
            </div>
        </div>
    )
}
