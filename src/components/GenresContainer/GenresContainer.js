import React from 'react';

import './GenresContainer.css';

import TitleBar from '../TitleBar/TitleBar'
import GenreList from '../GenreList/GenreList'

export default ({icon, title, items}) => (
    <div className="GenreContainer">
        <TitleBar cName="GenresContainer__TitleBar" icon={icon} title={title} bg={"#16a085"}/>
        <GenreList items={items}/>
    </div>
);

