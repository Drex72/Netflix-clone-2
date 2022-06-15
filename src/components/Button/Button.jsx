import React from 'react'
import './Button.css'
import { motion } from 'framer-motion'

const Button = ({change, setChange}) => {
  const handleClick = () => {
    setChange(!change)
  }
  return (
    <div>
      <motion.button whileTap={{ scale: 0.3 }} onClick={handleClick}>
        Get started
      </motion.button>
    </div>
  )
}

export default Button
