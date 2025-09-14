import React, { useEffect, useRef } from 'react';
import NavList from './NavList';
import { IoChevronDownOutline, IoAddOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ListItem = ({ item, level, openDropdowns, setOpenDropdowns, pathname  }) => {

  const isOpen = openDropdowns[level] === item.id;

  const collectHrefs = (node) => {
    if (!node.children) {
      return [node.href].filter(Boolean);
    }
    return node.children.flatMap(collectHrefs);
  };

  let isActive = false;
  if (level === 1) {
    if (item.href) {
      isActive = pathname === item.href;
    } else if (item.children) {
      const childHrefs = collectHrefs(item);
      isActive = childHrefs.some(href => pathname.startsWith(href));
    }
  }

  const toggleDropdown = () => {
    // const newId = Number(item.id.toString()[0]);
    // setOpenedTab(newId);
    // console.log(newId) 

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
    // const newId = Number(item.id.toString()[0]);
    // setOpenedTab(newId);
    // console.log(newId);

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
      return;
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
    <li key={item.id} className={isActive ? 'opened-tab' : null}>
      <SmartLink item={item} />
      {item.children && item.children.length > 0 && (
        <button 
          onClick={toggleDropdown} 
          className='drop-down-button'
        >
          
          {String(item.id).length > 1 ?  
            <p className='nav-link'>
              {item.label} <IoAddOutline 
                style={{ 
                  transform: isOpen ? 'rotate(180deg)' : null, 
                  transition: '.4s',
                  fontSize: '20px'
                  }}/>
            </p> : 
            <p className='nav-link'>
              {item.label} <IoChevronDownOutline
                style={{ 
                  transform: isOpen ? 'rotate(180deg)' : null, 
                  transition: '.4s',
                  fontSize: '20px'
                  }}/>
            </p>}
        </button>
      )}
      {item.children && item.children.length > 0 && (
        <div className={`list-dropdown list-${level} ${isOpen ? 'show' : null}`}>
          <NavList 
            headerData={item.children} 
            level={level + 1} 
            openDropdowns={openDropdowns} 
            setOpenDropdowns={setOpenDropdowns} 
            // openedTab={openedTab}
            // setOpenedTab={setOpenedTab}
          />
        </div>
      )}
    </li>
  )
}

export default ListItem;
