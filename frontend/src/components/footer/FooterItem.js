import React from 'react'
import { Link } from 'react-router-dom'
import './footerItem.css'

const FooterItem = ({ item }) => {

  const SmartLink = ({ currentItem }) => {
    
    if (!currentItem.href) {
      console.log(currentItem.label);
      return;
    }

    const isExternal = currentItem.href.startsWith('http');
    const isFile = currentItem.href.match(/\.(pdf|docx?|xlsx?|jpg|png)$/i);

    if (isExternal || isFile) {
      return <a href={currentItem.href} target='_blank' rel='noopener noreferrer' className='item-list'>{currentItem.label}</a>
    } else {
      return <Link to={currentItem.href} className='item-list'>{currentItem.label}</Link>
    }
  }

  return (
    <li key={item.id}>
      <h4>{item.label}</h4>
      <ul className='children-list'>
        {
          item.children.map(child => {
            if (!child.children) {
              return (
                <li key={child.id}>
                  <SmartLink currentItem={child} />
                </li>
              ) 
            } else {
              return (
                child.children.map(childItem => <li key={childItem.id}>
                  <SmartLink currentItem={childItem} />
                </li>)
              )
            }
          })
        }
      </ul>
    </li>
  )
}

export default FooterItem