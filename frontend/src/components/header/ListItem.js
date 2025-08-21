import React, { useState } from 'react'
import NavList from './NavList'
import { IoChevronDownOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ListItem = ({ item, id, showDropDown, setShowDropDown }) => {

  const handleDropDowns = (currentLabel) => {
    if (currentLabel === showDropDown) {
      setShowDropDown(null);
    } else {
      setShowDropDown(currentLabel);
    }
  }

  return (
    <li key={item.label}>
      {item.children && item.children.length > 0 ? item.label : <Link className='nav-link' to={`${item.href}`}>{item.label}</Link>}
      {/* <Link className='nav-link' to={`${item.href}`}>{item.label}</Link> */}
      {item.children && item.children.length ? <button onClick={() => handleDropDowns(item.label)} className='drop-down-button'><IoChevronDownOutline/></button> : null}
      {item.children && showDropDown === item.label && item.children.length ? <div className={`list-dropdown list-${id}`}><NavList headerData={item.children} id={id}/></div> : null}
    </li>
  )
}

export default ListItem