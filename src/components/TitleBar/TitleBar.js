import React from 'react';

import './TitleBar.css';

export default ({icon, title}) => (
    <div className="TitleBar">
        <img className="TitleBar__icon" src={icon} alt="popular"></img>
        <p className="TitleBar__text">{title}</p>
        <div className="TitleBar__border"></div>
    </div>
);