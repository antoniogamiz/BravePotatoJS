import React from 'react';

import './DetailedItem.css';
import ChaptersList from '../ChaptersList/ChaptersList';

export default ({manga}) => (
    <div className="DetailedItem">
        <img className="DetailedItem__Img" src={manga.src} alt=""></img>
        <ChaptersList title={manga.title} chapters={manga.chapters}/>
    </div>
);

