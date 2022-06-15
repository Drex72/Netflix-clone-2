import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import Sign from '../../components/Sign-Up/Sign.jsx'
import Content from '../../components/Content/Content'
import SignUp from '../../components/Sign-Up/SignUp'
const LandingPage = ({ setUser }) => {
  const [change, setChange] = useState(false)
  const [newToggle, setNewToggle] = useState(false)
  const [clickHandler, setClickHandler] = useState()
  const onTermClick = (toggle, setToggle, handleClick) => {
    setNewToggle(toggle)
  }

  return (
    <div className={`intro2 ${change ? 'overflow' : ''}`}>
      {change ? (
        <Sign
          change={change}
          setChange={setChange}
          setToggle={setNewToggle}
          setUser={setUser}
          toggle={newToggle}
        />
      ) : (
        ''
      )}
      <div className={change ? 'blur' : ''}>
        <Hero setChange={setChange} change={change} setUser={setUser} onTermClick={onTermClick} />
        <Content setChange={setChange} change={change} />
      </div>
    </div>
  )
}

export default LandingPage
