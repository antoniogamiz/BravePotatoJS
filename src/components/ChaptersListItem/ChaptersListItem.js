import React from 'react';

import './ChaptersListItem.css';

export default ({chapter}) => (
    <div className="chapters-list-item">
        <p className="chapters-list-item__text">{chapter.name}</p>
        <i className="chapters-list-item__date">{chapter.date}</i>
    </div>
);

