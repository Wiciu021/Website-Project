import React, { useEffect, useState } from 'react'
import './adminSideBar.css'
import { FaUserShield } from "react-icons/fa";
import adminSidebarData from '../../Data/admin-sidebar-data';
import { styleEffect } from 'framer-motion';
import { data, Link } from 'react-router-dom';

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
            adminSidebarData && adminSidebarData.length ? adminSidebarData.map(dataItem => <li key={dataItem.id}><Link className='link' to={dataItem.href}>{dataItem.icon} <p style={{
              marginLeft: expand ? '1rem' : '0rem'
            }} className={`list-label ${expand ? 'expanded' : ''}`}>{dataItem.label}</p></Link></li>) : null
          }
        </ul>
      </nav>
      <div className='button-wrapper'> <Link to="/" className='return-link'>wroc</Link></div>
    </aside>
  )
}

export default AdminSideBar