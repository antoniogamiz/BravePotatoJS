import React from "react";

import "./Synopsis.css";

import icon from "../../theme/img/eye.svg";

export default ({ manga }) => (
  <div className="synopsis__wrapper">
    <a className="synopsis__title" href="/">
      {manga.title}
    </a>
    <a className="synopsis__chapter" href="/">
      {manga.chapters[0].name}
    </a>
    <div className="synopsis__views">
      <img className="synopsis__icon" src={icon} alt="" />
      <p className="synopsis__counts">12.939.595</p>
    </div>
    <p className="synopsis__synopsis">{manga.synopsis}</p>
  </div>
);
