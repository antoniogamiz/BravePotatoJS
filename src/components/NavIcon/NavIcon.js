import React from "react";

import "./NavIcon.css";

export default ({ icon, iconFont }) => (
  <div className="nav-icon">
    <img className="nav-icon_img" src={icon} alt="" />
    <img className="nav-icon_img" src={iconFont} alt="" />
  </div>
);
