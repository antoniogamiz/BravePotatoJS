import React from "react";
import { Link } from "react-router-dom";

import "./NavBarMenuEntry.css";

export default ({ url, text }) => (
  <Link to={`.${url}`}>
    <button className="nav-bar-menu-entry" href={url}>
      {text}
    </button>
  </Link>
);
