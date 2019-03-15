import React, { Component } from "react";

import "./App.css";

import { logoFont, logo, userIcon } from "./randomData";

// Components
import NavBar from "./components/NavBar/NavBar";
import NavBarMenuEntry from "./components/NavBarMenuEntry/NavBarMenuEntry";
import UserProfile from "./components/UserProfile/UserProfile";
import Footer from "./components/Footer/Footer";

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
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
