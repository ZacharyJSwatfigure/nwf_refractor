import React, { useState, useEffect } from "react";
import {
  ContactUs,
  LandingPage,
  OurMission,
  Services,
  Careers,
} from "../pages/index";

import "../components/style/page.css";

function CurrentPage({ page, setPage }) {
  const [currentPage, setCurrentPage] = useState(<LandingPage />);
  useEffect(() => {
    handlePageChange(page);
    console.log(currentPage);
    console.log(page);
  }, [page]);

  const handlePageChange = (page) => {
    if (page === 0) {
      return setCurrentPage(<Services />);
    } else if (page === 1) {
      return setCurrentPage(<OurMission />);
    } else if (page === 2) {
      return setCurrentPage(<Careers />);
    } else if (page === 3) {
      return setCurrentPage(<ContactUs />);
    } else {
      return setCurrentPage(<LandingPage page={page} setPage={setPage} />);
    }
  };
  return <div className="page-container">{currentPage}</div>;
}

export default CurrentPage;
