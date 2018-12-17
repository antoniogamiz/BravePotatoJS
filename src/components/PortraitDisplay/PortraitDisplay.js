import React from "react";

import "./PortraitDisplay.css";

export default ({ src, size, children }) => (
  <div className="portrait-display">
    <a href="/">
      <img style={size} className="portrait-display__img" src={src} alt="" />
    </a>
    {children}
  </div>
);
