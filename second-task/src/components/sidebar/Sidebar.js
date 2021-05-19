import React from "react";
import "./Sidebar.css";

function Sidebar() {
  console.log("sidebar is rendering");
  return (
    <div className="sidebar">
      <div className="app">
        <a className="back">Back</a>
        <h3 className="logic">Logic</h3>
      </div>
    </div>
  );
}

export default Sidebar;
