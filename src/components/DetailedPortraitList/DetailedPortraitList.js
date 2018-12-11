import React from 'react';

import './DetailedPortraitList.css';
import DetailedItem from '../DetailedItem/DetailedItem';

export default ({items}) => (
    <div className="DetailedPortraitList">
    { items.map( (v,i) => 
        <div key={i} className="DetailedPortraitList__Item">
            <DetailedItem manga={v}/>
        </div>
    )}
    </div>
);

