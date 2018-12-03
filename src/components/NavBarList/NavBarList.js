import React from 'react';

import NavBarItem from '../NavBarItem/NavBarItem';
import './NavBarList.css';

export default ({items}) => (
    <ul className="NavBar-item-list">
    { items.map( (v,i) => <NavBarItem k={i} url={v.url} text={v.text} /> ) }
    </ul>
);