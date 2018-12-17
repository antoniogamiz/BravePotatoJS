import React from "react";

import "./SectionContainer.css";

import TitleBar from "../TitleBar/TitleBar";

export default ({ icon, title, bg, children }) => (
  <div
    style={{
      boxShadow: `5px 5p 5px ${bg}`,
      border: `4px solid ${bg}`
    }}
    className="section-container"
  >
    <TitleBar
      cName="section-container__title-bar"
      icon={icon}
      title={title}
      bg={bg}
    />
    {children}
  </div>
);
