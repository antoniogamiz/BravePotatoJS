import React from "react";

import "./NavBarList.css";

export default ({ items }) => (
  <ul className="nav-bar__items-list">
    {items.map((v, i) => (
      <li className="nav-bar__item" key={i}>
        {v}
      </li>
    ))}
  </ul>
);
