import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection"; 
import ForStudent from "./components/for-student-section/ForStudent";
import Feed from "./components/feed-section/Feed";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route, useLocation  } from 'react-router-dom'
import FeedPage from "./components/feed-page/FeedPage";
import FeedPagePost from "./components/feed-page-post/FeedPagePost";
import LoginPopUp from "./components/login-popup/LoginPopUp";
import DocumentsSection from "./components/documents-section/DocumentsSection";
import TeachingStaffSection from "./components/teaching-staff-section/TeachingStaffSection";
import CandidatesInfo from "./components/candidates-info/CandidatesInfo";
import NotFoundSection from "./components/not-found-section/NotFoundSection";
import ClassProfile from "./components/class-profile/ClassProfile";
import PhotoGallerySection from "./components/photo-gallery/PhotoGallerySection";
import SchoolHistorySection from "./components/history-of-school/SchoolHistorySection";
import InsuranceSection from "./components/insurance-section/InsuranceSection";
import AchievementsSection from "./components/students-achievements/AchievementsSection";
import AnnualAchievements from "./components/students-achievements/AnnualAchievements";
import MaturaSection from "./components/matura-section/MaturaSection";
import SchoolCouncilSection from "./components/school-council-section/SchoolCouncilSection";
import ContactSection from "./components/contact-section/ContactSection";
import ErasmusRecrutationSeciton from "./components/erasmus-recrutatuon-section/ErasmusRecrutationSeciton";
import ErasmusSection from "./components/erasmus-section/ErasmusSection";
import ParentsCouncilSection from "./components/parents-council-section/ParentsCouncilSection";
import { AnimatePresence, motion } from "framer-motion";
import AdminPanelSection from "./components/admin-panel/AdminPanelSection";
import feedData from "./Data/feed-data";
import galleryData from "./Data/gallery-data";
// import docsData from "./Data/docs-data";
import documentsData from "./Data/documents-data";
import { use, useState } from "react";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ForStudent />
      <Feed />
    </>
  )
}

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
} 

function AdminLayout({ children }) {
  return (  
    <>
      {children}
    </>
  )
} 

function AnimatedRoutes() {
  // feed data 
  const [feedContentData, setFeedContentData] = useState(feedData);
  // gallery data
  const [galleryContentData, setGalleryContentData] = useState(galleryData);
  // documents data
  const [documentsDataContent, setDocumentsDataContent] = useState(documentsData);
  
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <HomePage />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/aktualnosci"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <FeedPage feedData={feedContentData} />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/post/:id"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <FeedPagePost />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/login"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <LoginPopUp />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/dokumenty-szkolne"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <DocumentsSection documentsData={documentsDataContent.filter(dataItem => dataItem.category === 'school')}/>
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/zespol-nauczycieli"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <TeachingStaffSection />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/informacje-dla-kandydatow"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <CandidatesInfo />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/profile-klas"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <ClassProfile />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/galeria"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <PhotoGallerySection />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/historia"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <SchoolHistorySection documentsData={documentsDataContent.filter(dataItem => dataItem.category === 'history')}/>
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/ubezpieczenie"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <InsuranceSection />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/osiagniecia"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <AchievementsSection />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/osiagniecia/:id"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <AnnualAchievements />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/matura"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <MaturaSection documentsData={documentsDataContent.filter(dataItem => dataItem.category === 'matura')}/>
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/samorzad-uczniowski"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <SchoolCouncilSection />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/kontakt"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <ContactSection />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/projekty-unijne/erasmus/rekrutacja"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <ErasmusRecrutationSeciton documentsData={documentsDataContent.filter(dataItem => dataItem.category === 'erasmus')} />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/projekty-unijne/erasmus"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <ErasmusSection />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/rada-rodzicow"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <ParentsCouncilSection />
              </motion.div>
            </DefaultLayout>
          }
        />
        <Route
          path="/admin-panel/*"
          element={
            <AdminLayout>
              <AdminPanelSection feedData={feedContentData} setFeedData={setFeedContentData} galleryData={galleryContentData} setGalleryData={setFeedContentData} documentsData={documentsDataContent} setDocumentsData={setDocumentsDataContent}/>
            </AdminLayout>
          }
        />
        <Route
          path="*"
          element={
            <DefaultLayout>
              <motion.div {...pageTransition}>
                <NotFoundSection />
              </motion.div>
            </DefaultLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
