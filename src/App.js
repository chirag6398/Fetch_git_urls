import React, { Component } from 'react';
import Fform from "./components/Fetch-form/Form";
import Repourl from "./components/Repourl/Repourl";
import Avatar from "./components/Avatar/Avatar"
import axios from "axios";
import {Api} from "./services/Api"
export default class App extends Component {
  state = {
    userName: "",
    repoUrls: [],
    projectName: [],
    avatar: "",
  }
  stateHandler = (repo_Name) => {
    this.setState({ userName: repo_Name,repoUrls:[],projectName:[],avatar:"" });
  Api(this.state.userName,(res1)=>{
    console.log(res1)
  });
   
    axios.get(`https://api.github.com/users/${repo_Name}/repos?per_page=5&sort=created:asc`)
      .then((res) => {
        res.data.map((val) => {
          this.setState(() => {
            // console.log(val)
            return {
              repoUrls: [...this.state.repoUrls, val.git_url],
              projectName: [...this.state.projectName, val.name]
            }
          })
        });
        this.setState({ avatar: res.data[0].owner.avatar_url });
        console.log(res);
      }).catch((err)=>{
        console.log(err)
      });

  }

  componentDidMount = () => {
    // console.log(this.state)
  }
  render() {
    return (
      <div>

        <Fform repoHandler={this.stateHandler} />
        <Avatar url={this.state.avatar}
          user={this.state.userName}
        />
        <Repourl repourls={this.state.repoUrls}
          ProjectName={this.state.projectName}
        />
      </div>
    )
  }
}
