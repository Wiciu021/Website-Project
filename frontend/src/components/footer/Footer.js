import React from 'react'
import headerData from '../../Data/header-nav'
import FooterItem from './FooterItem'
import socialMedia from '../../Data/social-media-data'
import './footer.css'
import { createRipple, clearRipple } from '../../hooks/rippleEffect'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className="footer-wrapper">
        {
          headerData && headerData.length ? headerData.filter(dataItem => dataItem.children).map(dataItem => <FooterItem item={dataItem} />) : null
        }
        <div className='contact-container'>
          <h4>Kontakt</h4>
          
          <div className='list-wrapper'>
            {
              socialMedia && socialMedia.length ? socialMedia.map(dataItem => <li className='ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple} key={dataItem.name}><a href={dataItem.url} rel='noopener noreferrer' target='_blank' className='item-list'>{dataItem.icon}</a></li>) : null
            }
          </div>
        </div>
      </ul>
    </footer>
  )
}

export default Footer