import React, { useState } from 'react'
import logo from '../../Images/logo.png'
import { motion } from 'framer-motion'

const Navigation = ({setChange, change}) => {
  const handleClick = () =>{
    setChange(!change)
  }
  return (
    <div className="navs">
      <img className="logo" src={logo} alt="" />
      <motion.button whileTap={{ scale: 0.3 }} onClick={handleClick} className="signin">
        Sign In
      </motion.button>
    </div>
  )
}

export default Navigation
