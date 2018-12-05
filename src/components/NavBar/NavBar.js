import React, { Component } from 'react';

import './NavBar.css';
import NavBarList from '../NavBarList/NavBarList';
import Search from '../Search/Search'

class NavBar extends Component {
  

  render() {
    const { imgLogo, menuEntries, searchImg } = this.props;
    
    const items = [
      ...menuEntries, 
      <Search src={searchImg} onClick={this.searchClicked} show={true} />
    ]
    
    return (
        <nav className="NavBar">
          <img className="NavBar__Logo" src={imgLogo} alt=""></img>
          <NavBarList items={items} />
        </nav>
    );   
  }
}

export default NavBar;