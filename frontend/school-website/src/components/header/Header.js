import React from 'react'
import ListItem from './ListItem'
import './header.css'
import headerData from '../../Data/header-nav'
import { RiPlanetLine } from 'react-icons/ri'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <RiPlanetLine className='icons'/>
        <nav className='nav'>
          <ul>
            {
              headerData && headerData.length ? headerData.map(headerItem => <ListItem item={headerItem}/>) : null
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header