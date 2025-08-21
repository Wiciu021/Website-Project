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

  const SmartLink = ({ item }) => {
    if (item.children && item.children.length > 0) {
      return item.label;
    }
    const isExternal = item.href.startsWith('http');
    const isFile = item.href.match(/\.(pdf|docx?|xlsx?|jpg|png)$/i);

    if (isFile || isExternal) {
      return <a href={`${item.href}`} target='_blank' rel='noopener noreferrer' className='nav-link'>{item.label}</a>
    } else {
      return <Link to={`${item.href}`} className='nav-link'>{item.label}</Link>
    }
  }

  return (
    <li key={item.label}>
      <SmartLink item={item} />
      {/* {item.children && item.children.length > 0 ? item.label : <Link className='nav-link' to={`${item.href}`}>{item.label}</Link>} */}
      {/* <Link className='nav-link' to={`${item.href}`}>{item.label}</Link> */}
      {item.children && item.children.length ? <button onClick={() => handleDropDowns(item.label)} className='drop-down-button'><IoChevronDownOutline/></button> : null}
      {item.children && showDropDown === item.label && item.children.length ? <div className={`list-dropdown list-${id}`}><NavList headerData={item.children} id={id}/></div> : null}
    </li>
  )
}

export default ListItem