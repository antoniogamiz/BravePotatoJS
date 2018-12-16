import React from "react";

import "./GenreList.css";

export default ({ items }) => (
  <div className="genre-list">
    <ul className="genre-list__list">
      {items.map((v, i) => (
        <li className="genre-list__item" key={i}>
          {/* eslint-disable-next-line */}
          <a className="genre-list__item__link" href="#">
            {v}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
