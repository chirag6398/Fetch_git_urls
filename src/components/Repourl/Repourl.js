import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import avatarstyle from "../../styles/Avatar.module.css"
const Repourl = (props) => {
    var urls = null;

    urls = props.repourls.map((val, index) => {
        return (<>
            <table className="table" key={index}>
                {(index === 0) ?
                    <thead className="thead-dark" key={index+3}>
                        <tr key={index+4}>
                            <th scope="col">S.No.</th>

                            <th scope="col">Git-Repo-Url</th>
                            <th scope="col">Project-Name</th>
                        </tr>
                    </thead> : null}

                <tbody key={index+1}>
                    <tr key={index+2}>
                        <th scope="row">{index}</th>
                        <td>{val}</td>
                        <td>{props.ProjectName[index]}</td>
                    </tr>
                </tbody>
            </table>
        </>)
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