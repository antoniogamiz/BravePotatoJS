import React from "react";

import "./BigChaptersList.css";

import { chaptersList } from "../../randomData";

export default ({}) => (
  <div className="b-chapters-list">
    <hr className="b-chapters-list__hr" />
    <div className="b-chapters-list__header">
      <p>Chapter Name</p>
      <p>View</p>
      <p>Time uploaded</p>
    </div>
    <hr className="b-chapters-list__hr" />
    <ul className="b-chapters-list__list">
      {chaptersList.map((v, i) => (
        <li className="b-chapters-list__item">
          <a href="/manga">{v.title}</a>
          <p>{v.views}</p>
          <p>{v.date}</p>
        </li>
      ))}
    </ul>
  </div>
);
