import React, { useEffect, useState } from 'react'
import './adminSideBar.css'
import { FaUserShield } from "react-icons/fa";
import adminSidebarData from '../../Data/admin-sidebar-data';
import { styleEffect } from 'framer-motion';

const AdminSideBar = () => {

    useEffect(() => {
      document.body.classList.add('remove-margin');

      return () => {
        document.body.classList.remove('remove-margin');
      }
    }, []);

    const [expand, setExpand] = useState(false);


  return (
    <aside className='side-bar' onMouseOver={() => {
      setExpand(true);
    }}
    onMouseOut={() => {
      setExpand(false);
    }}
    style={{
      width: expand ? '250px' : '100px'
    }}>
      <nav>
        <div className='logo-wrapper'>
          <div className='icon-container'>
            <FaUserShield className='icon'/>
          </div>
          <p className={`list-label ${expand ? 'expanded' : ''}`}>Panel Admina</p>
        </div>
        <ul>
          {
            adminSidebarData && adminSidebarData.length ? adminSidebarData.map(dataItem => <li key={dataItem.id}>{dataItem.icon} <p className={`list-label ${expand ? 'expanded' : ''}`}>{dataItem.label}</p></li>) : null
          }
        </ul>
      </nav>
    </aside>
  )
}

export default AdminSideBar