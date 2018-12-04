import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import logo from './img/logo.png';

import NavBarMenuEntry from './components/NavBarMenuEntry/NavBarMenuEntry'

import SearchLoupe from './components/SearchLoupe/SearchLoupe'
import searchLogo from './img/search-logo.svg'

let a = [ 
  NavBarMenuEntry( { url: "#", text: "HOME" } ),
  NavBarMenuEntry( { url: "#", text: "LATEST MANGA" } ),
  NavBarMenuEntry( { url: "#", text: "COMPLETED MANGA" } ),
  <SearchLoupe src={searchLogo}/>
]

console.log( a[0] )

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar imgLogo={logo} items={a} searchLogo={searchLogo}/>
        <div className="container" ></div>
      </div>
    );
  }
}

export default App;
