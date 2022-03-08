import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom"

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
          <div className="navbar-container">
              {/* scrollLink  */}
              <div className="navbar-logo">
                  <img src={logo} alt="" />
                  <h1>teste</h1>
              </div>
              <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>   
                <li className="nav-item">
                  {/* scrollLink */}
                  <div className="nav-links">
                    ABOUT US
                  </div>
                </li>
                <li className="nav-item">
                  {/* scrollLink */}
                  <div className="nav-links">
                    ADOPTION
                  </div>
                </li>
                <li className="nav-item">
                  {/* scrollLink */}
                  <div className="nav-links">
                    HELP US
                  </div>
                </li>
                <li className="nav-item">
                  {/* scrollLink */}
                  <div className="nav-links">
                    Contact
                  </div>
                </li>
                <li className="nav-btn">
                  {button ? (
                    <a href='#' target="_blank" rel="noopener noreferrer" className="btn-link">
                      <Button buttonStyle='btn--outline'>DONATE</Button>
                      DONATE
                    </a>
                    ) : (
                    
                    <a href='#' target="_blank" rel="noopener noreferrer" className="btn-link">
                      <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>DONATE</Button>
                    </a>
                   )} 
                </li>

              </ul>
          </div>
      </div>
    </>
  )
}

export default Navbar