import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import "../pages/Technologies.css";
import TechStack from "../components/TechStack";

const Technologies = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="TECHONOLOGIES."
        text="By Enthusiasticly I work on it...."
      />
      <TechStack/>
      <Footer />
    </div>
  );
};

export default Technologies;
