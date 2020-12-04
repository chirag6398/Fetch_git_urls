import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import avatarstyle from "../../styles/Avatar.module.css"
const Repourl = (props) => {
    var urls = null;

    urls = props.repourls.map((val, index) => {
        return (<div key={index}>
            <table className="table" >
                {(index === 0) ?
                    <thead className="thead-dark" >
                        <tr >
                            <th scope="col">S.No.</th>

                            <th scope="col">Git-Repo-Url</th>
                            <th scope="col">Project-Name</th>
                        </tr>
                    </thead> : null}

                <tbody >
                    <tr >
                        <th scope="row">{index}</th>
                        <td>{val}</td>
                        <td>{props.ProjectName[index]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    })

    return (<>
        <div className={avatarstyle.ext_div}>
            <div>
                {urls}
            </div>
        </div>

    </>)
}

export default Repourl;