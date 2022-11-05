import React from "react";
import "../pages/About.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import HeroAbout from "../components/HeroAbout";
import Github from "../components/Github";
import Stats from "../components/Stats";

const About = () => {
  return (
    <div id="about">
      <Navbar />
      <HeroAbout />
      {/* <Stats/> */}
      <Github/>
      
    </div>
  );
};

export default About;
