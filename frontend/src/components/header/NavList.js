import React from 'react'
import ListItem from './ListItem'
import { useState } from 'react';

const NavList = ({ headerData, id }) => {

  const [showDropDown, setShowDropDown] = useState(false);
  
  return (
    <ul className={`ul-${id}`}>
      {
        headerData && headerData.length ? headerData.map(headerItem => <ListItem key={headerItem.id} item={headerItem} id={id + 1} showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>) : null
      }
    </ul>
  )
}

export default NavList