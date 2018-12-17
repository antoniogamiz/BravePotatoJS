import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import { logoFont, logo, userIcon } from "./randomData";

// Components
import NavBar from "./components/NavBar/NavBar";
import NavBarMenuEntry from "./components/NavBarMenuEntry/NavBarMenuEntry";
import UserProfile from "./components/UserProfile/UserProfile";

import Home from "./pages/Home";
import Latest from "./pages/LatestManga";
import Completed from "./pages/CompletedManga";

let menuEntries = [
  NavBarMenuEntry({ url: "/", text: "Home" }),
  NavBarMenuEntry({ url: "/latest", text: "Latest manga" }),
  NavBarMenuEntry({ url: "/completed", text: "Completed manga" }),
  <UserProfile profileImg={userIcon} />
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar
            imgLogo={logo}
            imgLogoFont={logoFont}
            menuEntries={menuEntries}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/latest" component={Latest} />
            <Route exact path="/completed" component={Completed} />
            <Route path="*" render={() => <p>Ups! Error :D</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
