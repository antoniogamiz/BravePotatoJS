import React from "react";

import "./ChaptersListItem.css";

import icon from "../../theme/img/right-chevron.svg";

export default ({ chapter }) => (
  <div className="chapters-list-item">
    <div className="chapters-list-item__wrapper">
      <img className="chapters-list-item__icon" src={icon} alt="" />
      <a
        href={`/api/manga?chapterid=${chapter._id}`}
        className="chapters-list-item__link"
      >
        {chapter.title}
      </a>
    </div>
    <i className="chapters-list-item__date">{"---"}</i>
  </div>
);
