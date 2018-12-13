import React from 'react';

import './TitleBar.css';

export default ({icon, title, cName, bg}) => (
    <div style={{backgroundColor: bg}} className={"title-bar " + cName}>
        <img className="title-bar__icon" src={icon} alt="popular"></img>
        <p className="title-bar__text">{title}</p>
    </div>
);