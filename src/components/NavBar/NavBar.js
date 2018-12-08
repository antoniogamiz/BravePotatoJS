import React, { Component } from 'react';
import './NavBar.css';

import NavBarList from '../NavBarList/NavBarList';
import Search from '../Search/Search'
import UserProfile from '../UserProfile/UserProfile';

import profileImg from '../../img/avatar.svg'
import NavIcon from '../NavIcon/NavIcon';
class NavBar extends Component {

  render() {
    const { imgLogo, imgLogoFont, menuEntries, searchImg } = this.props;

    const items = [
      <NavIcon icon={imgLogo} iconFont={imgLogoFont}/>,
      ...menuEntries,
      <Search src={searchImg} onClick={this.searchClicked} show={true} />,
      <UserProfile profileImg={profileImg}/>
    ]
    
    return (
        <nav className="NavBar">
          <NavBarList items={items} />
        </nav>
    );
  }
}

export default NavBar;