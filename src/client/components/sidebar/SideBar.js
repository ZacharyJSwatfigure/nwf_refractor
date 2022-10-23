import React from "react";
import "../style/sidebar.css";

function SideBar(props) {
  return (
    <div className="sidebar-container">
      <section className="sidebar-title">
        <button onClick={props.setSideBar(false)}>Click Me</button>
        <div>
          <ul className="sidebar-list">
            <li className="sidebar-listitem">Services</li>
            <li className="sidebar-listitem">Our Mission</li>
            <li className="sidebar-listitem">Careers</li>
            <li className="sidebar-listitem">Contact Us</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SideBar;
