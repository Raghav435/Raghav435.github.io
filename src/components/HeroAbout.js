import React from "react";
import { Link } from "react-router-dom";
import "./styles/HeroAbout.css";
import Profile from "../assets/Raghavpic.jpg";

const HeroAbout = () => {
  return (
    <div className="hero-img-about">
      <div className="heading-about">
        <div className="profile-img">
          <img height="350px" src={Profile} alt={Profile} />
        </div>
        <div>
          <h1 style={{ color: "cyan",marginBottom:"30px" }}>About Me</h1>
          <p style={{ color: "cyan",marginBottom:"30px" }}>
            Experience as a project Engineer. A developers work not only develop
            website, but also go through all the faces with pros and cons, that
            can make you best developer and develop a Full fledged website.
            Enthusiastic of building applications with front and back end
            operations.
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
