import React, { useState } from "react";

const Features = () => {
  const [desktopView, setDesktopView] = useState(true);
  const [hidePopups, setHidePopups] = useState(false);

  const handleDesktopView = () => setDesktopView(!desktopView);
  const handleHidePopups = () => setHidePopups(!hidePopups);

  return (
    <div className="section">
      {/* <!-- section-title --> */}
      {/* <div className="section-title">Features</div> */}
      {/* <!-- feature-option --> */}
      {/* <div
        className={`feature-option ${desktopView ? "option-active" : ""}`}
        data-theme-option="desktop-view"
        onClick={handleDesktopView}
      >
        <span className="text">Desktop View</span>
        <span className={`switch-btn ${desktopView ? "active" : ""}`}></span>
      </div> */}
      {/* <!-- feature-option --> */}
      {/* <div
        className={`feature-option ${hidePopups ? "option-active" : ""}`}
        data-theme-option="hide-popups"
        onClick={handleHidePopups}
      >
        <span className="text">Hide Hot Deals Popups</span>
        <span className={`switch-btn ${hidePopups ? "active" : ""}`}></span>
      </div> */}
    </div>
  );
};

export default Features;