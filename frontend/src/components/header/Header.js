import React, { useEffect, useRef, useState } from 'react';
import { RiPlanetLine } from 'react-icons/ri';
import NavList from './NavList';
import headerData from '../../Data/header-nav';
import './header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});
  // const [openedTab, setOpenedTab] = useState(1);
  const headerRef = useRef(null);

  useEffect(() => {

    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdowns({});
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);

  })

  return (
    <header className='header' ref={headerRef}>
      <div className='header-inner'>
        <RiPlanetLine className='icons'/>
        {/* <img src="/xxlo-icon.png" alt="" className='icon'/> */}
        <nav className='nav'>
          <NavList 
            headerData={headerData} 
            level={1} 
            openDropdowns={openDropdowns} 
            setOpenDropdowns={setOpenDropdowns} 
            // openedTab={openedTab}
            // setOpenedTab={setOpenedTab}
            pathname={location.pathname}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header;
