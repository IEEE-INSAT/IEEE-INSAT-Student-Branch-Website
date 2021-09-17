import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ThemeSwitcher/ThemeSwitcher";
import StyleContext from "../../contexts/StyleContext";
import logo from "../../assets/images/logo.png";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <img src={logo} alt="logo" height="40px" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About Us</a>
          </li>

          <li>
            <a href="#activities">Activities</a>
          </li>

          <li>
            <a href="#awards">Awards</a>
          </li>

          <li>
            <a href="#meetings">Meetings</a>
          </li>

          <li>
            <a href="#members">Members</a>
          </li>

          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
