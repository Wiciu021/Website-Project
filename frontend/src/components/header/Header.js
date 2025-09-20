import React, { useEffect, useRef, useState } from 'react';
import { RiPlanetLine } from 'react-icons/ri';
import NavList from './NavList';
import headerData from '../../Data/header-nav';
import './header.css';
import { useLocation } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Header = () => {

  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});
  // const [openedTab, setOpenedTab] = useState(1);
  const headerRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {

    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdowns({});
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);

  })

  const handleClick = () => {
    setOpenNav(true);
  }

  useEffect(() => {
    if (openNav) {
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    }

  }, [openNav]);

  return (
    <header className='header' ref={headerRef}>
      <div className='header-inner'>
        <RiPlanetLine className='icons'/>
        {/* <img src="/xxlo-icon.png" alt="" className='icon'/> */}
        <nav className={`nav ${openNav ? 'nav-visible' : ''}`}>
          <NavList 
            headerData={headerData} 
            level={1} 
            openDropdowns={openDropdowns} 
            setOpenDropdowns={setOpenDropdowns} 
            // openedTab={openedTab}
            // setOpenedTab={setOpenedTab}
            pathname={location.pathname}
          />
          <button className='close-button' onClick={() => setOpenNav(false)}><HiX /></button>
        </nav>
        <button className='hamburger-icon' onClick={handleClick}><HiMenu /></button>
      </div>
    </header>
  )
}

export default Header;
