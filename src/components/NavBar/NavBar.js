import React, { Component } from 'react';
import { Fragment } from 'react';

import './NavBar.css';
import NavBarList from '../NavBarList/NavBarList';
import SearchBar from '../SearchBar/SearchBar'
import Search from '../Search/Search'

class NavBar extends Component {
  

  render() {
    const { imgLogo, menuEntries, searchImg } = this.props;
    
    const items = [
      ...menuEntries, 
      <Search src={searchImg} onClick={this.searchClicked} show={true} />
    ]
    
    return (
      <Fragment>
        <nav className="NavBar">
          <img className="NavBar-logo" src={imgLogo} alt=""></img>
          <NavBarList items={items} />
        </nav>
      </Fragment>
    );   
  }
}

export default NavBar;