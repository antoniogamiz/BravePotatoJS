import React from 'react';

import './TitleBar.css';

export default ({icon, title, cName}) => (
    <div className={"TitleBar " + cName}>
        <img className="TitleBar__icon" src={icon} alt="popular"></img>
        <p className="TitleBar__text">{title}</p>
        {/* <div className="TitleBar__border"></div> */}
    </div>
);