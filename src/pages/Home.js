import React from 'react'
import "./Home.css";
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Footer/>
    </div>
  )
}

export default Home