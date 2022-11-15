import React from "react";
import { Link } from "react-router-dom";
import "./styles/HeroAbout.css";
import Profile from "../assets/Raghavpic.jpg";

const HeroAbout = () => {
  return (
    <div className="hero-img-about">
      <div className="heading-about">
        <div className="profile-img">
          <img className="profile-rs"  src={Profile} alt={Profile} />
        </div>
        <div>
          <h1 style={{ color: "cyan", marginBottom: "30px" }}>About Me</h1>
          <p style={{ color: "cyan", marginBottom: "30px" }}>
            Experience as a Project Engineer. Passionate about full-stack web
            development. Enthusiastic about building applications with front and
            back-end operations. Developers work not only to develop a website
            but also go through all the phases with pros and cons.
          </p>
          <a href="#contact">
            <button className="btn">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
