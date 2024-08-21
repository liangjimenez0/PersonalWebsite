import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";
import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export function Navigation() {
  AOS.init();

  const links = [
    { name: "Work", route: "work" },
    { name: "Play", route: "play" },
    // { name: "Writing", route: "writing" },
    { name: "About", route: "about" },
  ];

  const { pathname } = useLocation();

  //   Function for setting the mode (light or dark) of the webpage
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    setIsDarkMode(document.body.classList.contains("dark-mode"));
  }, []);

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="flex flex-row justify-between animate__animated animate__fadeInDown">
      <div className="name  pl-0">
        <a className="hover:text-gray-300 link" href="/work">
          亮
        </a>
      </div>
      <div className="flex flex-row">
        <div className="navigation">
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/${link.route}`}
              className={`link hover:text-gray-300 ${
                pathname === `/${link.route}` ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* <div>
          <button
            className="sun hover:text-grey"
            checked={isDarkMode}
            onClick={toggle}
          >
            <FiSun />
          </button>
        </div> */}
      </div>
    </div>
  );
}
