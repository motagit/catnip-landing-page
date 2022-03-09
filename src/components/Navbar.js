import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          {/* scrollLink  */}
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              {/* scrollLink */}
              <div className="nav-links">ABOUT US</div>
            </li>
            <li className="nav-item">
              {/* scrollLink */}
              <div className="nav-links">ADOPTION</div>
            </li>
            <li className="nav-item">
              {/* scrollLink */}
              <div className="nav-links">HELP US</div>
            </li>
            <li className="nav-item">
              {/* scrollLink */}
              <div className="nav-links">CONTACT</div>
            </li>
            <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonColor='primary'>DONATE</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--medium'
                      
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      DONATE
                    </Button>
                  </Link>
                )}
              </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
