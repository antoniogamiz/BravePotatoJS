import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import logoFont from './img/image.png';
import logo from './img/cradle.svg';
import popIcon from './img/popular.svg'

import NavBarMenuEntry from './components/NavBarMenuEntry/NavBarMenuEntry'
import searchLogo from './img/search-logo.svg'
import PopularMangaContainer from './components/PopularMangaContainer/PopularMangaContainer';

import mock1 from './img/mock-portrait-1.jpg';
import mock2 from './img/mock-portrait-2.jpg';
import mock3 from './img/mock-portrait-3.jpg';
import mock4 from './img/mock-portrait-4.jpg';

let menuEntries = [ 
  NavBarMenuEntry( { url: "#", text: "Home" } ),
  NavBarMenuEntry( { url: "#", text: "Latest manga" } ),
  NavBarMenuEntry( { url: "#", text: "Completed manga" } )
];


let portraits = [
  mock1,
  mock2,
  mock3,
  mock4,
  mock1,
  mock2,
  mock3,
  mock4,
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar imgLogo={logo} imgLogoFont={logoFont} menuEntries={menuEntries} searchImg = { searchLogo }/>
        <div className="MainContainer">
          <PopularMangaContainer icon={popIcon} title={"Popular Manga"} portraits={portraits}/>
        </div>
      </div>
    );
  }
}

export default App;
