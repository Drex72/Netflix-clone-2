import React, { useEffect, useState } from 'react';
import "./Nav.css"

const Nav = () => {
    const [show, handleShow] = useState(false)
    // We want the code to run once when the page loads
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, [])
  return (
      <div className= {`nav ${show && "nav__black"}`}>
          <img className='nav__logo'
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="NetFlix's Logo"
          />
          <form action="">
              <input className='search' type="text" name="" id="" />
          </form>
          <img
              className='nav__avatar'
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Netflix Avatar"
          />
    </div>
  )
}

export default Nav;