import React from 'react';

import './PortraitList.css';

export default ({items}) => (
    <div className="PortraitList">
    { items.map( (v,i) => 
        <img className="PortraitList__Item" key={i} src={v} alt="portrait"></img> 
    )}
    </div>
);