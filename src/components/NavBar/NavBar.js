import React from 'react';
import { Fragment } from 'react';

import './NavBar.css';
import NavBarList from '../NavBarList/NavBarList';
import SearchBar from '../SearchBar/SearchBar'


export default ({imgLogo, items}) => (
      <Fragment>
        <nav className="NavBar">
          <img className="NavBar-logo" src={imgLogo} alt=""></img>
          <NavBarList items={items} />
        </nav>
        <SearchBar />
      </Fragment>
);