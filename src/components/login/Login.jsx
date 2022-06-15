import React, { useState } from 'react'
import { auth } from '../../Js/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Login = ({ setUser, toggle, setToggle }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessages, setErrorMessages] = useState('')
  let navigate = useNavigate()

  const onLogin = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        if (user.displayName == null) {
          user.displayName = 'Unknown'
          console.log(user.displayName)
        }
        navigate('home')
        setUser(true)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        alert(errorCode)
        const errorMessage = error.message
        setErrorMessages(errorCode)
      })
  }
  return (
    <div>
      <form onSubmit={onLogin} action="">
        <div className="login">
          <div className="labels">
            <label htmlFor="">Email</label>
            <label htmlFor="">Password</label>
          </div>
          <div className="input">
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="remember">
          <div>
            <input type="checkbox" name="" id="" />
            <p>Remember Me</p>
          </div>
          <motion.button whileTap={{ scale: 0.6 }}>
            <Link to="home">Log In</Link>
          </motion.button>
          <p>{errorMessages}</p>
        </div>
      </form>
      <p className="noaccount">
        Don't have an Account?
        <motion.button
          whileTap={{ scale: 0.6 }}
          className="toggle-btn button"
          onClick={() => setToggle(!toggle)}
        >
          Sign up
        </motion.button>
      </p>
    </div>
  )
}

export default Login
