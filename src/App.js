import React, { Component } from "react";
import Fform from "./components/Fetch-form/Form";
import Repourl from "./components/Repourl/Repourl";
import Avatar from "./components/Avatar/Avatar";

import "./App.css";
import getApiData from "./services/Services";
import BIRDS from "vanta/dist/vanta.birds.min";

export default class App extends Component {
  state = {
    userName: "",
    repoUrls: [],
    projectName: [],
    avatar: "",
  };
  vantaRef = React.createRef();

  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  stateHandler = async (repo_Name) => {
    this.setState({
      repoUrls: [],
      projectName: [],
      avatar: "",
      userName: repo_Name,
    });
    var data = null;
    data = await getApiData(repo_Name);

    this.setState({
      ...this.state,
      avatar: data[0].owner.avatar_url,
    });
    data.map((val) => {
      this.setState({
        ...this.state,
        repoUrls: [...this.state.repoUrls, val.git_url],
        projectName: [...this.state.projectName, val.name],
      });
      return {};
    });
  };

  render() {
    return (
      <div ref={this.vantaRef} className="ext_div">
        <Fform repoHandler={this.stateHandler} />
        <div className="main_div">
          <Avatar url={this.state.avatar} user={this.state.userName} />
          <Repourl
            repourls={this.state.repoUrls}
            ProjectName={this.state.projectName}
          />
        </div>
      </div>
    );
  }
}
