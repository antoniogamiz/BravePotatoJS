import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import { logoFont, logo, userIcon } from "./randomData";

// Components
import NavBar from "./components/NavBar/NavBar";
import NavBarMenuEntry from "./components/NavBarMenuEntry/NavBarMenuEntry";
import UserProfile from "./components/UserProfile/UserProfile";

import Home from "./pages/Home";
import Latest from "./pages/LatestManga";
import Completed from "./pages/CompletedManga";
import MangaDisplay from "./pages/MangaDisplay";

let menuEntries = [
  NavBarMenuEntry({ url: "/", text: "Home" }),
  NavBarMenuEntry({ url: "/latest", text: "Latest manga" }),
  NavBarMenuEntry({ url: "/completed", text: "Completed manga" }),
  <UserProfile profileImg={userIcon} />
];

class App extends Component {
  render() {
    return (
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
          <Route exact path="/manga" component={MangaDisplay} />
          <Route path="*" render={() => <p>Ups! Error :D</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
