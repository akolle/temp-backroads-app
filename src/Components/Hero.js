import React from 'react'
import Title from './Title'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <Title title="Backroads app" />
        <p>Check it out</p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  )
}

export default Hero
