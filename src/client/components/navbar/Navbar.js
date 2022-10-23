import React from "react";
import Logo_150 from "../Logo_150";
import Navbar_listItems from "./Navbar_listItems";
import NWF_Title from "./NWF_Title";
import "../style/navbar.css";

function Navbar({ setPage }) {
  return (
    <div className="navbar-container">
      <Logo_150 setPage={setPage} />
      <NWF_Title />
      <Navbar_listItems setPage={setPage} />
    </div>
  );
}

export default Navbar;
