import React, { useState } from 'react'
import Navigation from './Navigation'
import '../../Pages/Landing-Page/Landing-Page.css'
import './Hero.css'
import Sign from '../Sign-Up/Sign'
import { motion } from 'framer-motion'
import background from '../../Images/background.jpg'

const Hero = ({ setChange, change, setUser, onTermClick }) => {
  const [toggle, setToggle] = useState(false)
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const handleClick = () => {
    // setToggle(!toggle)
    setChange(!change)
    onTermClick(toggle, setToggle, handleClick)
  }

  return (
    <div className="intro " style={myStyle}>
      <div className="container">
        <Navigation change={change} setChange={setChange} />
        <div className="hero">
          <div className="text">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p className="paragraph">watch anywhere. Cancel anytime</p>
          </div>
          <p className="paragraph2">Ready to watch? Click the button below to start</p>
          <motion.button whileTap={{ scale: 0.3 }} onClick={handleClick}>
            Get started{' '}
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Hero
