import React from 'react';

import './GenreList.css';

export default ({items}) => (
    <div className="GenreList">
        <ul className="GenreList__list">
        {
            items.map( (v,i) => 
                <li className="GenreList__item" key={i}>
                    {/* eslint-disable-next-line */}
                    <a className="GenreList__item__link" href="#">{v}</a>
                </li> 
            )
        }
        </ul>
    </div>
);

