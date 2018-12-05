import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import logo from './img/logo.png';

import NavBarMenuEntry from './components/NavBarMenuEntry/NavBarMenuEntry'
import searchLogo from './img/search-logo.svg'

let menuEntries = [ 
  NavBarMenuEntry( { url: "#", text: "HOME" } ),
  NavBarMenuEntry( { url: "#", text: "LATEST MANGA" } ),
  NavBarMenuEntry( { url: "#", text: "COMPLETED MANGA" } )
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar imgLogo={logo} menuEntries={menuEntries} searchImg = { searchLogo }/>
        <div className="container" ></div>
      </div>
    );
  }
}

export default App;
