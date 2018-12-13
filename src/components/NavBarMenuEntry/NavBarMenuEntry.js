import React from 'react';
import './NavBarMenuEntry.css';

export default ({url, text}) => (
        <a className="nav-bar-menu-entry" href={url}>{text}</a>
);