import React from "react";
import "../style/scrollNavbar.css";
import NWF_Title from "../navbar/NWF_Title";

function ScrollNavbar(props) {
  return (
    <div className="scrollnav-container">
      <section className="waffleIcon">
        <i
          className="bi bi-list"
          // onClick={() => {
          //   if (props.sidebar) {
          //     props.setSideBar(false);
          //     console.log("fired... is now " + props.sidebar);
          //   } else if (props.sidebar === false) {
          //     props.setSideBar(true);
          //     console.log("fired... is now " + props.sidebar);
          //   } else {
          //     return console.error("sidebar");
          //   }
          // }}
        ></i>
      </section>

      <section>
        <NWF_Title />
      </section>
    </div>
  );
}

export default ScrollNavbar;
