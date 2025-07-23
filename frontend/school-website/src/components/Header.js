import React from 'react'
import headerData from '../Data/header-nav'
import ListItem from './ListItem'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <div className='logo-container'>img</div>
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