import React from "react";

import "./SynopsisPortrait.css";

import icon from "../../theme/img/eye.svg";

export default ({ manga }) => (
  <div className="synopsis-portrait">
    <a href="/">
      <img className="synopsis-portrait__img" src={manga.src} alt="" />
    </a>
    <div className="synopsis-portrait__wrapper">
      <a className="synopsis-portrait__title" href="/">
        {manga.title}
      </a>
      <a className="synopsis-portrait__chapter" href="/">
        {manga.chapters[0].name}
      </a>
      <div className="synopsis-portrait__views">
        <img className="synopsis-portrait__icon" src={icon} alt="" />
        <p className="synopsis-portrait__counts">12.939.595</p>
      </div>
      <p className="synopsis-portrait__synopsis">{manga.synopsis}</p>
    </div>
  </div>
);
