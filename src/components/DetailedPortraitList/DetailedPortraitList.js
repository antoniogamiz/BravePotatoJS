import React from 'react';

import './DetailedPortraitList.css';
import DetailedItem from '../DetailedItem/DetailedItem';

export default ({items}) => (
    <div className="detailed-portrait-list">
    { items.map( (v,i) => 
        <div key={i} className="detailed-portrait-list__item">
            <DetailedItem manga={v}/>
        </div>
)}
    </div>
);

