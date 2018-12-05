import React, { Component } from 'react';
import './NavBar.css';

import NavBarList from '../NavBarList/NavBarList';
import Search from '../Search/Search'
import UserProfile from '../UserProfile/UserProfile';

import profileImg from '../../img/avatar.svg'
class NavBar extends Component {
  

  render() {
    const { imgLogo, imgLogoFont, menuEntries, searchImg } = this.props;
    
    const items = [
      ...menuEntries, 
      <Search src={searchImg} onClick={this.searchClicked} show={true} />,
      <UserProfile profileImg={profileImg}/>
    ]
    
    return (
        <nav className="NavBar">
          <div className="NavBar__MainIcon">
            {/* eslint-disable-next-line */}
            <a href="#">
              <img className="NavBar__MainIcon_Img" src={imgLogo} alt=""></img>
              <img className="NavBar__MainIcon_Img" src={imgLogoFont} alt=""></img>          
            </a>
          </div>
          <NavBarList items={items} />
        </nav>
    );   
  }
}

export default NavBar;