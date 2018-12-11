import React from 'react';

import './SectionContainer.css';

import TitleBar from '../TitleBar/TitleBar'

export default ({icon, title, bg, children}) => (
    <div className="SectionContainer">
        <TitleBar cName="SectionContainer__TitleBar" icon={icon} title={title} bg={bg}/>        
        {children}
    </div>
);

