import React, { forwardRef } from "react";
import "./styles/NavBarCC.css"; // Make sure to adjust the CSS file accordingly

const NavBarCC = forwardRef(({ tabs, style, className = "" }, ref) => {
  return (
    <div className={`navbar ${className}`} style={style} ref={ref}>
      <div className="logo">Logo</div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div className="tab" key={index}>
            {tab.label}
            <div className="dropdown-content">
              {tab.options.map((option, index) => (
                <div key={index}>{option}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
});

export default NavBarCC;