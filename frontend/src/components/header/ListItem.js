import React from 'react';
import NavList from './NavList';
import { IoChevronDownOutline, IoAddOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ListItem = ({ item, level, openDropdowns, setOpenDropdowns }) => {

  const isOpen = openDropdowns[level] === item.id;

  const toggleDropdown = () => {
    setOpenDropdowns(prev => {
      const newState = { ...prev };

      if (isOpen) {
        newState[level] = null;
      } else {
        newState[level] = item.id;
      }

      Object.keys(newState).forEach(lvl => {
        if (Number(lvl) > level) {
          newState[lvl] = null;
        }
      });

      return newState;
    });
  }; 
  
  const handleClick = () => {
    setOpenDropdowns(prev => {
      const newState = { ...prev };

      Object.keys(newState).forEach(lvl => {
        newState[lvl] = null;
      });

      return newState;
    });
  }

  const SmartLink = ({ item }) => {
    if (item.children && item.children.length > 0) {
      return item.label;
    }

    const isExternal = item.href.startsWith('http');
    const isFile = item.href.match(/\.(pdf|docx?|xlsx?|jpg|png)$/i);

    if (isFile || isExternal) {
      return <a onClick={handleClick} href={item.href} target='_blank' rel='noopener noreferrer' className='nav-link'>{item.label}</a>
    } else {
      return <Link to={item.href} onClick={handleClick} className='nav-link'>{item.label}</Link>
    }
  }

  return (
    <li key={item.id}>
      <SmartLink item={item} />
      {item.children && item.children.length > 0 && (
        <button 
          onClick={toggleDropdown} 
          className='drop-down-button'
          style={{ transform: isOpen ? 'rotate(180deg)' : null }}
        >
          {String(item.id).length > 1 ? <IoAddOutline/> : <IoChevronDownOutline/>}
        </button>
      )}
      {item.children && item.children.length > 0 && (
        <div className={`list-dropdown list-${level} ${isOpen ? 'show' : null}`}>
          <NavList 
            headerData={item.children} 
            level={level + 1} 
            openDropdowns={openDropdowns} 
            setOpenDropdowns={setOpenDropdowns} 
          />
        </div>
      )}
    </li>
  )
}

export default ListItem;
