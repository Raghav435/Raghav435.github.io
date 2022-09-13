import React from "react";
import "../pages/About.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import HeroAbout from "../components/HeroAbout";

const About = () => {
  return (
    <div>
      <Navbar />

      <HeroAbout />

      <Footer />
    </div>
  );
};

export default About;
