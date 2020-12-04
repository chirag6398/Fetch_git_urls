import React, { Component } from 'react';
import Fform from "./components/Fetch-form/Form";
import Repourl from "./components/Repourl/Repourl";
import Avatar from "./components/Avatar/Avatar"
import axios from "axios";
import "./App.css"
import BIRDS from 'vanta/dist/vanta.birds.min';

export default class App extends Component {
  state = {
    userName: "",
    repoUrls: [],
    projectName: [],
    avatar: "",
  }
  vantaRef = React.createRef();

  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  stateHandler = (repo_Name) => {
    this.setState({ userName: repo_Name, repoUrls: [], projectName: [], avatar: "" });




    axios.get(`https://api.github.com/users/${repo_Name}/repos?per_page=5&sort=created:asc`)
      .then((res) => {
        res.data.map((val) => {
          this.setState(() => {

            return {
              repoUrls: [...this.state.repoUrls, val.git_url],
              projectName: [...this.state.projectName, val.name]
            }
          })
        });
        this.setState({ avatar: res.data[0].owner.avatar_url });

      }).catch((err) => {
        console.log(err)
      });

  }


  render() {
    return (

      <div ref={this.vantaRef} className="ext_div"  >
        
          <Fform repoHandler={this.stateHandler} />
          <div className="main_div">
            <Avatar url={this.state.avatar}
              user={this.state.userName}
            />
            <Repourl repourls={this.state.repoUrls}
              ProjectName={this.state.projectName}
            />
          

        </div>
      </div>


    )
  }
}
