import React from 'react'
import './adminPanelSection.css'
import adminSidebarData from '../../Data/admin-sidebar-data'
import AdminSideBar from './AdminSideBar';
// import feedData from '../../Data/feed-data';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminPanelFeed from './AdminPanelFeed';
import { AnimatePresence, motion } from "framer-motion";

const AdminPanelSection = ({ feedData, setFeedData }) => {

  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };

  return (
    <section className='admin-panel-section'>
      <AdminSideBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="aktualnosci" element={<motion.div {...pageTransition} style={{ width: '100vw', height: '100vh' }} ><AdminPanelFeed setFeedData={setFeedData} feedData={feedData}/></motion.div> } />
        </Routes>
      </AnimatePresence>
    </section>
  )
}

export default AdminPanelSection