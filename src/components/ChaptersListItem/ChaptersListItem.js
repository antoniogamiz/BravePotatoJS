import React from "react";

import "./ChaptersListItem.css";

// import icon from "/static/theme/img/right-chevron.svg";

export default ({ chapter }) => (
  <div className="chapters-list-item">
    <div className="chapters-list-item__wrapper">
      <img
        className="chapters-list-item__icon"
        src={"/static/theme/img/right-chevron.svg"}
        alt=""
      />
      <a href={"#"} className="chapters-list-item__link">
        {chapter.title}
      </a>
    </div>
    <i className="chapters-list-item__date">{chapter.views}</i>
  </div>
);
