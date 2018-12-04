import React from 'react';
import './NavBar.css';
import NavBarList from '../NavBarList/NavBarList';

export default ({imgLogo, items, searchLogo}) => (
      <nav className="NavBar">
        <img className="NavBar-logo" src={imgLogo} alt=""></img>
        <NavBarList items={items} />
      </nav>
);
