import React from "react";
import "./styles/HeroImg2.css";

const HeroImg2 = ({heading, text}) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1 style={{color:"yellow"}}>{heading}</h1>
        <p style={{color:"cyan"}}>{text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
