import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Button } from "../../Button"
import './Navbar.scss'
import { useWindowDimensions } from "../../utils"
import {animateScroll as scroll} from 'react-scroll'


function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const width = useWindowDimensions().width;
  console.log(useWindowDimensions().width);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 160,
      behavior: 'smooth',
    });
    if (width <= 960) {
      closeMobileMenu();
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={toggleHome}>
            <img src={process.env.PUBLIC_URL  + '/images/logo-remake-yellow.svg'} alt="Catnip" />
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={() => scrollToSection(props.reference.about)}>
              <span className="nav-links">ABOUT</span>
            </li>
            <li className="nav-item" onClick={() => scrollToSection(props.reference.adoption)}>
              <span className="nav-links">ADOPTION</span>
            </li>
            <li className="nav-item" onClick={() => scrollToSection(props.reference.help)}>
              <span className="nav-links">HELP US</span>
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
