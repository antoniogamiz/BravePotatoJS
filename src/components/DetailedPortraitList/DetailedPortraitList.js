import React from 'react';

import './DetailedPortraitList.css';

export default ({items}) => (
    <div className="DetailedPortraitList">
    { items.map( (v,i) => 
        <div key={i} className="DetailedPortraitList__Item">
            <img className="DetailedPortraitList__Item__Img" key={i} src={v} alt=""></img> 
            <p>One Piece Chapter aaaa</p>
        </div>
    )}
    </div>
);

