import React from "react";

import "./IconP.css";

export default ({ icon, text, cName }) => (
  <div className={`iconp-wrapper ${cName}`}>
    <img className="iconp-wrapper__icon" src={icon} alt="" />
    <p className="iconp-wrapper__text"> {text} </p>
  </div>
);
