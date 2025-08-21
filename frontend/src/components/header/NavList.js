import React from 'react';
import ListItem from './ListItem';

const NavList = ({ headerData, level, openDropdowns, setOpenDropdowns }) => {
  return (
    <ul className={`ul-${level}`}>
      {headerData && headerData.map(item => (
        <ListItem 
          key={item.id} 
          item={item} 
          level={level} 
          openDropdowns={openDropdowns} 
          setOpenDropdowns={setOpenDropdowns} 
        />
      ))}
    </ul>
  )
}

export default NavList;
