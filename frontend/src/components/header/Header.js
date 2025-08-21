import React, { useState } from 'react';
import { RiPlanetLine } from 'react-icons/ri';
import NavList from './NavList';
import headerData from '../../Data/header-nav';
import './header.css';

const Header = () => {

  const [openDropdowns, setOpenDropdowns] = useState({});

  return (
    <header className='header'>
      <div className='header-inner'>
        <RiPlanetLine className='icons'/>
        <nav className='nav'>
          <NavList 
            headerData={headerData} 
            level={1} 
            openDropdowns={openDropdowns} 
            setOpenDropdowns={setOpenDropdowns} 
          />
        </nav>
      </div>
    </header>
  )
}

export default Header;
