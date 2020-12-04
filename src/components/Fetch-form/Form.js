import React, { useState } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import formstyle from "../../styles/Form.module.css";


export default function Form(props) {
    const [repoState, setRepoName] = useState({ reponame: "" });
    const repoNameHandler = (e) => {
        
        setRepoName({ reponame: e.target.value })
    }
    const submitHandler = (e) => {
        
        props.repoHandler(repoState.reponame);
    }


    return (<div className={formstyle.ext_div}>
        <div className={formstyle.Form}>
            <h1 className="display-4 " style={{color:"white"}}>Enter git user name for details</h1>
            <input className="form-control " type="text" name="repoName" value={repoState.reponame} placeholder="Enter repo name " onChange={repoNameHandler} />
            <button className="btn btn-success my-3" type="submit" onClick={submitHandler}>fetch-repo</button>
        </div>
    </div>
    )
}
