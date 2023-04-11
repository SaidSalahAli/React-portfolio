import React, { useEffect, useState } from "react";
import {AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);
  const [meunu, setMeunu] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    //HEADER
    <header className={ navbar ?'header-active': 'l-header'}>
    <nav className='nav bd-grid'>
        <div>
          <a href="#homeس" className="nav__logo">
            Said
          </a>
        </div>
        <div className="nav__menu active" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                Work
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="nav__toggle" id="nav-toggle">
           <AiOutlineMenu />
        </div> */}
        <div onClick={() => setMeunu((prev) => !prev)} className="nav__toggle" >
        {meunu ? <AiOutlineClose className="menu-btn" /> : <AiOutlineMenu />}
      {meunu? (<div className="nav__active" >
          <ul>
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                Work
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>):null}

      </div>
      </nav>
    </header>
  );
};

export default Navbar;
