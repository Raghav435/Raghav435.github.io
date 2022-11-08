import "./styles/HeroImg.css";
import React from "react";
import IntroImg from "../assets/hero/hero12.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M RAGHAV SHUKLA</p>
        <h1>FULL STACK WEB DEVELOPER</h1>
        <div>
          <a href="#projects" className="btn">
            PROJECTS
          </a>
          <a  href= {require("../assets/Resume/Raghav_Shukla_Resume.pdf")} download>
            <button
              className="btn"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/10MXQyiRdBVuwRJcM6f7LXTcYWay0aZ0O/view?usp=sharing"
                )
              }
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
