import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import "../pages/Technologies.css";

const Technologies = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="Technalogies."
        text="By enthusiasticly I work on it...."
      />
      <Footer />
    </div>
  );
};

export default Technologies;
