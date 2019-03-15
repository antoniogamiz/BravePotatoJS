import React from "react";

import "./MangaInfo.css";

import PortraitDisplay from "../PortraitDisplay/PortraitDisplay";
import IconP from "../IconP/IconP";
import BigChaptersList from "../BigChaptersList/BigChaptersList";

// import contract from "/static/theme/img/contract.svg";
// import author from "/static/theme/img/user-silhouette.svg";
// import clock from "/static/theme/img/hourglass.svg";
// import visible from "/static/theme/img/visible.svg";
// import edit from "/static/theme/img/edit.svg";
// import plus from "/static/theme/img/plus.svg";

import { mock1 } from "../../randomData";

// be9dd1

export default ({}) => (
  <div className="manga-info">
    <PortraitDisplay src={mock1} size={{ width: "223px", height: "293px" }}>
      <div className="m-info">
        <IconP
          cName="first-icon"
          icon={"/static/theme/img/contract.svg"}
          text={"One Piece :D"}
        />
        <IconP
          cName="second-icon"
          icon={"/static/theme/img/user-silhouette.svg"}
          text={"Author(s): Eichiro Oda."}
        />
        <IconP
          cName="third-icon"
          icon={"/static/theme/img/hourglass.svg"}
          text={"Status: Ongoing"}
        />
        <IconP
          cName="fourth-icon"
          icon={"/static/theme/img/visible.svg"}
          text={"Last updated: Dec-18-2018 17:47:12 PM"}
        />
        <IconP
          cName="fifth-icon"
          icon={"/static/theme/img/edit.svg"}
          text={"Views: 7,008,110"}
        />
        <IconP
          cName="sixth-icon"
          icon={"/static/theme/img/plus.svg"}
          text={"manga-cradle.com rate : 4.37/ 5 - 238 votes"}
        />
      </div>
    </PortraitDisplay>
    <hr className="manga-info__hr" />
    <div className="manga-info__synopsis">
      <p className="manga-info__title">One piece, summary.</p>
      <p className="manga-info__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        temporibus fuga laudantium et necessitatibus laboriosam nihil tempora
        molestias sint aperiam ipsum in soluta, ratione quo ea velit,
        dignissimos sed perspiciatis ipsam odit explicabo quod natus quidem sit!
        Aliquid libero exercitationem saepe eum aperiam temporibus voluptatem!
        Consectetur, amet minima. Eaque molestias tempore vitae sunt saepe
        recusandae quidem vero voluptatem blanditiis fuga.
      </p>
    </div>
    <hr className="manga-info__hr" />
    <BigChaptersList />
  </div>
);
