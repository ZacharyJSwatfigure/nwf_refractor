import React from "react";
import "../style/navbar.css";

function Navbar_listItems(props) {
  const handlePageChange = (e) => {
    props.setPage(e.target.value);
  };

  return (
    <section>
      <ul className="navbar-list">
        <li
          onClick={(e) => {
            handlePageChange(e);
          }}
          value={0}
          className="item"
        >
          Services
        </li>
        <li
          onClick={(e) => {
            handlePageChange(e);
          }}
          value={1}
          className="item"
        >
          Our Mission
        </li>
        <li
          onClick={(e) => {
            handlePageChange(e);
          }}
          value={2}
          className="item"
        >
          Careers and Opportunites
        </li>
        <li
          onClick={(e) => {
            handlePageChange(e);
          }}
          value={3}
          className="item"
        >
          Contact Us
        </li>
      </ul>
    </section>
  );
}

export default Navbar_listItems;
