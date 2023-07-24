import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <a href="#home">
        <h1>R S</h1>
      </a>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="#home" class="menu-btn">
            Home
          </a>
        </li>
        <li>
          <a href="#about" class="menu-btn">
            About
          </a>
        </li>
        <li>
          <a href="#projects" class="menu-btn">
            Project
          </a>
        </li>
        <li>
          <a href="#technologies">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href={require("../assets/Resume/Raghav_Shukla_Resume.pdf")}
            download
          >
            <div
              class="menu-btn"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/10MXQyiRdBVuwRJcM6f7LXTcYWay0aZ0O/view?usp=sharing"
                )
              }
            >
              Resume
            </div>
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaBars size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
