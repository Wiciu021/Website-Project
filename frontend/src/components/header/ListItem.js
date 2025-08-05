import React, { useState } from 'react'
import NavList from './NavList'
import { IoChevronDownOutline } from 'react-icons/io5';


const ListItem = ({ item }) => {

  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <li key={item.label}>
      {item.label}
      {item.children && item.children.length ? <button onClick={() => setShowDropDown(!showDropDown)} className='drop-down-button'><IoChevronDownOutline /></button> : null}
      {item.children && showDropDown && item.children.length ? <div className='list-dropdown'><NavList headerData={item.children}/></div> : null}
    </li>
  )
}

export default ListItem