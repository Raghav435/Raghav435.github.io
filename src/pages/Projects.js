import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

const Projects = () => {
  return (
    <div id="projects">
      <Navbar />
      <HeroImg2 heading="Projects." text="Some of my good Projects" />
      <Work />
    </div>
  );
};

export default Projects;
