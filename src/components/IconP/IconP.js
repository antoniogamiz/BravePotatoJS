import React from "react";

import "./IconP.css";

export default ({ icon, text }) => (
  <div className="iconp-wrapper">
    <img className="iconp-wrapper__icon" src={icon} alt="" />
    <p className="iconp-wrapper__text"> {text} </p>
  </div>
);
