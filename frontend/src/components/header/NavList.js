import React from 'react'
import ListItem from './ListItem'

const NavList = ({ headerData }) => {
  return (
    <ul>
      {
        headerData && headerData.length ? headerData.map(headerItem => <ListItem item={headerItem}/>) : null
      }
    </ul>
  )
}

export default NavList