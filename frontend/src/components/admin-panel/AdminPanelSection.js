import React from 'react'
import './adminPanelSection.css'
import adminSidebarData from '../../Data/admin-sidebar-data'
import AdminSideBar from './AdminSideBar';
// import feedData from '../../Data/feed-data';
import { Route, Routes } from 'react-router-dom';
import AdminPanelFeed from './AdminPanelFeed';

const AdminPanelSection = ({ feedData, setFeedData }) => {

  return (
    <section className='admin-panel-section'>
      <AdminSideBar />
      <Routes>
        <Route path="aktualnosci" element={<AdminPanelFeed setFeedData={setFeedData} feedData={feedData}/>} />
      </Routes>
    </section>
  )
}

export default AdminPanelSection