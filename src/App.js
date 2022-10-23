import Navbar from "./client/components/navbar/Navbar";
import ScrollNavbar from "./client/components/navbar/ScrollNavbar";
import CurrentPage from "./client/components/CurrentPage";
import SideBar from "./client/components/sidebar/SideBar";
import React, { useState, useEffect } from "react";
import LandingPage from "./client/pages/landingpage";
import "./client/components/style/App.css";

function App() {
  const [page, setPage] = useState(<LandingPage />);
  const [navbar, setNavbar] = useState(true);
  const [sidebar, setSideBar] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log("scroll", window.scrollY);
    };
    window.addEventListener("scroll", () => {
      handleScroll();
      navbarController(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarController = (height) => {
    if (height < 150) {
      setNavbar(true);
    } else if (height > 150) {
      setNavbar(false);
    } else {
      console.error("error");
    }
  };

  return (
    <div className="theAllHolder">
      <div>
        {navbar ? (
          <Navbar setPage={setPage} />
        ) : (
          <ScrollNavbar
            sidebar={sidebar}
            setSideBar={setSideBar}
            setPage={setPage}
          />
        )}
      </div>
      <CurrentPage page={page} setPage={setPage} />
      <div>
        {sidebar === true ? (
          <SideBar setSideBar={setSideBar} sidebar={sidebar} />
        ) : (
          <p />
        )}
      </div>
    </div>
  );
}

export default App;
