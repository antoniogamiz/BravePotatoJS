import React from "react";

import "./MangaInfo.css";

import PortraitDisplay from "../PortraitDisplay/PortraitDisplay";
import IconP from "../IconP/IconP";

import contract from "../../theme/img/contract.svg";

import { mock1 } from "../../randomData";

// be9dd1

export default ({}) => (
  <div className="manga-info">
    <PortraitDisplay src={mock1} size={{ width: "223px", height: "293px" }}>
      <div className="m-info">
        <IconP icon={contract} text={"One Piece :D"} />
      </div>
    </PortraitDisplay>
  </div>
);
