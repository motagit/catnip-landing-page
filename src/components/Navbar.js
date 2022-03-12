import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css';
import { useWindowDimensions } from "./utils";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const width = useWindowDimensions().width;

  console.log(useWindowDimensions().width);


  const showButton = () => {
    if (width <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // console.log(showButton);
  // window.addEventListener('resize', showButton);

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
              <span className="nav-links">ABOUT US</span>
            </li>
            <li className="nav-item">
              {/* scrollLink */}
              <span className="nav-links">ADOPTION</span>
            </li>
            <li className="nav-item">
              {/* scrollLink */}
              <span className="nav-links">HELP US</span>
            </li>
            <li className="nav-item">
              {/* scrollLink */}
              <span className="nav-links">CONTACT</span>
            </li>
            <li className='nav-btn'>
                {width >= 960 ? (
                  <Link to='' className='btn-link'>
                    <Button buttonStyle='btn--primary'>DONATE</Button>
                  </Link>
                ) : (
                  <Link to='' className='btn-link'>
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
