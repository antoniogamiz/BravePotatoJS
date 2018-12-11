import React from 'react';

import './ChaptersListItem.css';

export default ({chapter}) => (
    <div className="ChaptersListItem">
        <p className="ChaptersListItem__Text">{chapter.name}</p>
        <i className="ChaptersListItem__Date">{chapter.date}</i>
    </div>
);

