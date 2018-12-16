import React from "react";

import "./DetailedItem.css";
import ChaptersList from "../ChaptersList/ChaptersList";

export default ({ manga }) => (
  <div className="detailed-item">
    <a href="/">
      <img className="detailed-item__img" src={manga.src} alt="" />
    </a>
    <ChaptersList title={manga.title} chapters={manga.chapters} />
  </div>
);
