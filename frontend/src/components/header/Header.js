import React from 'react'
import ListItem from './ListItem'
import './header.css'
import headerData from '../../Data/header-nav'
import { RiPlanetLine } from 'react-icons/ri'
import NavList from './NavList'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <RiPlanetLine className='icons'/>
        <nav className='nav'>
          <NavList headerData={headerData} />
        </nav>
      </div>
    </header>
  )
}

export default Header