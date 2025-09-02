import React from 'react'
import './adminPanelSection.css'
import adminSidebarData from '../../Data/admin-sidebar-data'
import AdminSideBar from './AdminSideBar'

const AdminPanelSection = () => {
  return (
    <section className='admin-panel-section'>
      <AdminSideBar />
    </section>
  )
}

export default AdminPanelSection