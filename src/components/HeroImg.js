import "./styles/HeroImg.css";
import React from "react";
import IntroImg from "../assets/hero/hero12.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro_img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M RAGHAV SHUKLA</p>
        <h1>FULL STACK WEB DEVELOPER</h1>
        <div>
          <Link to="/projects" className="btn">
            PROJECTS
          </Link>
          <a
            target="blank"
            href="Raghav_shukla_Resume.pdf"
            download="Raghav_shukla_Resume.pdf"
            className="btn btn-light"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
