import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../assets/styles/components/navbar.scss";
function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackhround = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackhround);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={navbar ? "navbar activeScroll" : "navbar"}>
          <div className="navbar-container container">
            <Link className="navbar-logo" to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="logo" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/chapters"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Chapters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/activities"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Activities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/awards"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Awards
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>

              <div className="hexagon">
                <ul className="list">
                  <li className="polygon_top item">
                    <a href="//www.ieee.org">Join_IEEE</a>
                  </li>
                  <li className="polygon_top item"></li>
                  <li className="polygon_top item"></li>
                  <li className="polygon_bottom item"></li>
                  <li className="polygon_bottom item"></li>
                  <li className="polygon_bottom item">
                    <a href="//r8syp.ieee.tn">SYP_2022</a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
