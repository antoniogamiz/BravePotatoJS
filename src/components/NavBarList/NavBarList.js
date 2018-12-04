import React from 'react';

import './NavBarList.css';

export default ({items}) => (
    <ul className="NavBar-item-list">
    { items.map( (v,i) => 
        <li className="NavBar-item" key={i} >
            {v}
        </li> 
    )}
    </ul>
);