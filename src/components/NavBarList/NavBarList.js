import React from 'react';

import './NavBarList.css';

export default ({items}) => (
    <ul className="NavBar__ItemsList">
    { items.map( (v,i) => 
        <li className="NavBar__Item" key={i} >
            {v}
        </li> 
    )}
    </ul>
);