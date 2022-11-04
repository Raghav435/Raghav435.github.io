import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import "../pages/Technologies.css";
import TechStack from "../components/TechStack";

const Technologies = () => {
  return (
    <div id="technologies">
      <Navbar />
      <HeroImg2 heading="Skills" text="By Enthusiasticly I work on it...." />
      <TechStack />
    </div>
  );
};

export default Technologies;
