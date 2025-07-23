import React from 'react'
import ListItem from './ListItem'
import './header.css'
import headerData from '../../Data/header-nav'

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