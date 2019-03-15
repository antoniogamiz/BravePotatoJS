import React from "react";

import "./Synopsis.css";

// import icon from "/static/theme/img/eye.svg";

export default ({ manga }) => (
  <div className="synopsis__wrapper">
    <a className="synopsis__title" href="/">
      {manga.title}
    </a>
    <a className="synopsis__chapter" href="/">
      {manga.chaptersList[0].title}
    </a>
    <div className="synopsis__views">
      <img
        className="synopsis__icon"
        src={"/static/theme/img/eye.svg"}
        alt=""
      />
      <p className="synopsis__counts">{manga.views}</p>
    </div>
    <p className="synopsis__synopsis">{manga.synopsis}</p>
  </div>
);
