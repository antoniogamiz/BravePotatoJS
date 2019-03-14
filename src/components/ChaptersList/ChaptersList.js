import React from "react";

import "./ChaptersList.css";
import ChaptersListItem from "../ChaptersListItem/ChaptersListItem";

export default ({ title, chapters }) => (
  <ul className="chapters-list">
    <li key={"title"} className="chapters-list__title">
      {title}
    </li>
    {chapters.slice(0, 3).map((v, i) => (
      <li key={i}>
        <ChaptersListItem chapter={v} />
      </li>
    ))}
  </ul>
);
