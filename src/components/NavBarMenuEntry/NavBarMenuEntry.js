import React from "react";

import "./NavBarMenuEntry.css";

export default ({ url, text }) => (
  <button className="nav-bar-menu-entry" href={url}>
    {text}
  </button>
);
