import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from '../login/Login'
import { IoExitOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
const Sign = ({ setUser, setToggle, toggle, change, setChange }) => {
  const handleClick = () => {
    setChange(!change)
  }
  let authTitle = ''
  function conditionals() {
    if (toggle) {
      authTitle = 'Sign Up'
    } else {
      authTitle = 'Login'
    }
  }
  conditionals()

  return (
    <div className=" body">
      <div className="authentication">
        <motion.div whileTap={{ scale: 0.6 }} onClick={handleClick}>
          <IoExitOutline size={60} className="exit" />
        </motion.div>
        <div className="container2">
          <h1>{authTitle}</h1>
          {toggle ? (
            <SignUp toggle={toggle} setUser={setUser} setToggle={setToggle} />
          ) : (
            <Login toggle={toggle} setUser={setUser} setToggle={setToggle} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Sign
