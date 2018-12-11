import React from 'react';

import './ChaptersList.css';
import ChaptersListItem from '../ChaptersListItem/ChaptersListItem';

export default ({title, chapters}) => (
    <ul className="ChaptersList">
        <li key={"title"} className="ChaptersList__Title">{title}</li>
        { chapters.map( (v,i) => 
            <li key={i}>
                <ChaptersListItem chapter={v}/>
            </li>    
        )}
    </ul>
);