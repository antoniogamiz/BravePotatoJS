import React from 'react';

import './NavIcon.css';

export default ({icon, iconFont}) => (
    <div className="NavIcon">
        {/* eslint-disable-next-line */}
        <a href="#">
            <img className="NavIcon_Img" src={icon} alt=""></img>
            <img className="NavIcon_Img" src={iconFont} alt=""></img>          
        </a>
  </div>
);