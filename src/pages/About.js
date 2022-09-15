import React from "react";
import "../pages/About.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import HeroAbout from "../components/HeroAbout";
import Github from "../components/Github";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <Github/>
      <Footer />
    </div>
  );
};

export default About;
