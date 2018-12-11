import React, { Component } from 'react';
import './App.css';

import { items, genres } from './randomData'

// Images
import logoFont from './img/image.png';
import logo from './img/cradle.svg';
import popIcon from './img/popular.svg'
import latIcon from './img/stopwatch.svg'
import genIcon from './img/price-tag.svg'
import userIcon from './img/avatar.svg'


// Components
import NavBar from './components/NavBar/NavBar';
import NavBarMenuEntry from './components/NavBarMenuEntry/NavBarMenuEntry'
import SearchBar from './components/SearchBar/SearchBar'
import CenterWrapper  from './components/containers/CenterWrapper/CenterWrapper'
import UserProfile from './components/UserProfile/UserProfile'
import PopularMangaContainer from './components/PopularMangaContainer/PopularMangaContainer';
import LatestMangaContainer from './components/LatestMangaContainer/LatestMangaContainer';
import GenresContainer from './components/GenresContainer/GenresContainer';

import mock1 from './img/mock-portrait-1.jpg';
import mock2 from './img/mock-portrait-2.jpg';
import mock3 from './img/mock-portrait-3.jpg';
import mock4 from './img/mock-portrait-4.jpg';

let menuEntries = [ 
  NavBarMenuEntry( { url: "#", text: "Home" } ),
  NavBarMenuEntry( { url: "#", text: "Latest manga" } ),
  NavBarMenuEntry( { url: "#", text: "Completed manga" } ),
  <UserProfile profileImg={userIcon}/>

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
  mock1,
  mock2,
  mock3,
  mock4
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar imgLogo={logo} imgLogoFont={logoFont} menuEntries={menuEntries}/>
        <div className="MarginWrapper-20">
          <CenterWrapper width="90%">
            <SearchBar/>
          </CenterWrapper>
          <div className="main-container">
            <div className="popular-manga-container-item">
              <PopularMangaContainer icon={popIcon} title={"Popular Manga"} portraits={portraits}/>        
            </div>
            <div className="latest-manga-container-item">            
              <LatestMangaContainer icon={latIcon} title={"Latest Manga"} items={items} />        
            </div>
            <div className="genres-manga-container-item">            
              <GenresContainer icon={genIcon} title={"Genres"} items={genres}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
