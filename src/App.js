import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import logoFont from './img/image.png';
import logo from './img/cradle.svg';
import popIcon from './img/popular.svg'

import NavBarMenuEntry from './components/NavBarMenuEntry/NavBarMenuEntry'
import searchLogo from './img/search-logo.svg'
import TitleBar from './components/TitleBar/TitleBar';

let menuEntries = [ 
  NavBarMenuEntry( { url: "#", text: "Home" } ),
  NavBarMenuEntry( { url: "#", text: "Latest manga" } ),
  NavBarMenuEntry( { url: "#", text: "Completed manga" } )
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar imgLogo={logo} imgLogoFont={logoFont} menuEntries={menuEntries} searchImg = { searchLogo }/>
      <div className="MainContainer">
        <TitleBar icon={popIcon} title={"Popular Manga"} />
      </div>
      </div>
    );
  }
}

export default App;
