import React, { Component } from 'react';
import './NavBar.css';

import NavBarList from '../NavBarList/NavBarList';

import NavIcon from '../NavIcon/NavIcon';
import MobNavBar from '../MobNavBar/MobNavBar';



class NavBar extends Component {

  render() {
    const { imgLogo, imgLogoFont, menuEntries } = this.props;
    
    const deskItems = [
      <NavIcon icon={imgLogo} iconFont={imgLogoFont}/>,
      ...menuEntries
    ]

    return (
        <nav className="nav-bar">
          <div className="nav-bar__desk-nav">
            <NavBarList items={deskItems}/>
          </div>
          <div className="nav-bar__mob-nav">
            <MobNavBar imgLogo={imgLogo} imgLogoFont={imgLogoFont} menuEntries={menuEntries}/>
          </div>
        </nav>
    );
  }
}

export default NavBar;