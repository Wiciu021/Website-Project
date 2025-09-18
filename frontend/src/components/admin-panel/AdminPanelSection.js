import React from 'react'
import './adminPanelSection.css'
import adminSidebarData from '../../Data/admin-sidebar-data'
import AdminSideBar from './AdminSideBar';
// import feedData from '../../Data/feed-data';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminPanelFeed from './admin-components/admin-feed/AdminPanelFeed';
import { AnimatePresence, motion } from "framer-motion";
import AdminGallery from './admin-components/admin-gallery/AdminGallery';
import AdminDocuments from './admin-components/admin-documents/AdminDocuments';
import AdminZastepstwa from './admin-components/admin-zastepstwa/AdminZastepstwa';
import AdminTeachers from './admin-components/admin-teachers/AdminTeachers';

const AdminPanelSection = ({ feedData, setFeedData, galleryData, setGalleryData, documentsData, setDocumentsData, teachersData, setTeachersData }) => {

  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: .3 },
  };

  return (
    <section className='admin-panel-section'>
      <AdminSideBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="aktualnosci" element={<motion.div {...pageTransition} style={{ width: '100vw', height: '100vh', flex: 1, display: 'flex', flexDirection: 'column' }} ><AdminPanelFeed setFeedData={setFeedData} feedData={feedData}/></motion.div> } />
          <Route path="galeria" element={<motion.div {...pageTransition} style={{ width: '100vw', height: '100vh', flex: 1, display: 'flex', flexDirection: 'column' }} ><AdminGallery galleryData={galleryData} setGalleryData={setGalleryData} /></motion.div> } />
          <Route path="dokumenty" element={<motion.div {...pageTransition} style={{ width: '100vw', height: '100vh', flex: 1, display: 'flex', flexDirection: 'column' }} ><AdminDocuments documentsData={documentsData} setDocumentsData={setDocumentsData} /></motion.div> } />
          <Route path="zastepstwa" element={<motion.div {...pageTransition} style={{ width: '100vw', height: '100vh', flex: 1, display: 'flex', flexDirection: 'column' }} ><AdminZastepstwa /></motion.div> } />
          <Route path="nauczyciele" element={<motion.div {...pageTransition} style={{ width: '100vw', height: '100vh', flex: 1, display: 'flex', flexDirection: 'column' }} ><AdminTeachers teachersData={teachersData} setTeachersData={setTeachersData} /></motion.div> } />
        </Routes>
      </AnimatePresence>
    </section>
  )
}

export default AdminPanelSection