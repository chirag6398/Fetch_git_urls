import React from 'react';
import avatarstyle from "../../styles/Avatar.module.css"
export default function Avatar(props) {
    var userName=null;
     userName=(props.url)?<h2>{props.user}</h2>:(props.user)?<h2>Enter correct username</h2>:null
       
    
    return (
        <div className={avatarstyle.ext_div}>
            <div >
                <img className={avatarstyle.imgstyle} src={props.url} alt="..."></img>
                {userName}
            </div>
        </div>
    )
}
