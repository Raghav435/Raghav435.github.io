import React from 'react'
import "./Home.css";
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2';

const Home = () => {
  return (
    <div id="home">
      <Navbar/>
      <HeroImg/>
    </div>
  )
}

export default Home