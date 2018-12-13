import React from 'react';

import './SectionContainer.css';

import TitleBar from '../TitleBar/TitleBar'

export default ({icon, title, bg, children}) => (
    <div className="section-container">
        <TitleBar cName="section-container__title-bar" icon={icon} title={title} bg={bg}/>        
        {children}
    </div>
);

