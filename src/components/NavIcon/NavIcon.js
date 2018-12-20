import React from "react";
import { Link } from "react-router-dom";

import "./NavIcon.css";

export default ({ icon, iconFont }) => (
  <div className="nav-icon">
    {/* eslint-disable-next-line */}
    <Link to="/">
      <img className="nav-icon_img" src={icon} alt="" />
      <img className="nav-icon_img" src={iconFont} alt="" />
    </Link>
  </div>
);
