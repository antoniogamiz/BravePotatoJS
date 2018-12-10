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
        <nav className="NavBar">
          <div className="NavBar__DeskNav">
            <NavBarList items={deskItems}/>
          </div>
          <div className="NavBar__MobNav">
            <MobNavBar imgLogo={imgLogo} imgLogoFont={imgLogoFont} menuEntries={menuEntries}/>
          </div>
        </nav>
    );
  }
}

export default NavBar;