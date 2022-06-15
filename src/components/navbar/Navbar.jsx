import "./navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';
import "../../index.css"

const Navbar = () => {
const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        // clean-up function
        return () => window.onscroll = null;
    }
  return (
      <div className= {isScrolled ? 'navbar scrolled' : 'navbar'}>
          <div className="container sm: w-full">
              <div className="left">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"/>
                  <span>HomePage</span>
                  <span>Series</span>
                  <span>Movies</span>
                  <span>New and Popular</span>
                  <span>My List</span>
              </div>
              <div className="right">
                <FontAwesomeIcon className="icon" icon={ faMagnifyingGlass }/>
                <span>KIDS</span>
                  <FontAwesomeIcon className="icon"     icon={faBell} />
                  <img src="https://i.pinimg.com/originals/31/8f/e1/318fe1c711af21dbb9c8701bd3aa0084.jpg" />
                  <div className="profile">
                    <FontAwesomeIcon className="icon" icon={faCaretDown }/>
                    <div className="options">
                          <span>Settings</span>  
                          <span>Logout</span>
                    </div>
                  </div>
              </div>
            
          </div>
    </div>
  )
}

export default Navbar