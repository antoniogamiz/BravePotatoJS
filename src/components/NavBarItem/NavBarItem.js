import React from 'react';
import './NavBarItem.css';

export default ({k, url, text}) => (
    <li key={k} className="NavBar-item">
        <a href={url}>{text}</a>
    </li>
);