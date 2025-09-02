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

function HomePage() {
  return (
    <>
      <HeroSection />
      <ForStudent />
      <Feed />
    </>
  )
}


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><HomePage /></motion.div>} />
        <Route path="/aktualnosci" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><FeedPage /></motion.div>} />
        <Route path="/post/:id" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><FeedPagePost /></motion.div>} />
        <Route path="/login" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><LoginPopUp /></motion.div>} />
        <Route path="/dokumenty-szkolne" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><DocumentsSection /></motion.div>} />
        <Route path="/zespol-nauczycieli" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><TeachingStaffSection /></motion.div>} />
        <Route path="/informacje-dla-kandydatow" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><CandidatesInfo /></motion.div>} />
        <Route path="/profile-klas" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><ClassProfile /></motion.div>} />
        <Route path="/galeria" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><PhotoGallerySection /></motion.div>} />
        <Route path="/historia" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><SchoolHistorySection /></motion.div>} />
        <Route path="/ubezpieczenie" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><InsuranceSection /></motion.div>} />
        <Route path="/osiagniecia" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><AchievementsSection /></motion.div>} />
        <Route path="/osiagniecia/:id" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><AnnualAchievements /></motion.div>} />
        <Route path="/matura" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><MaturaSection /></motion.div>} />
        <Route path="/samorzad-uczniowski" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><SchoolCouncilSection /></motion.div>} />
        <Route path="/kontakt" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><ContactSection /></motion.div>} />
        <Route path="/projekty-unijne/erasmus/rekrutacja" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><ErasmusRecrutationSeciton /></motion.div>} />
        <Route path="/projekty-unijne/erasmus" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><ErasmusSection /></motion.div>} />
        <Route path="/rada-rodzicow" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><ParentsCouncilSection /></motion.div>} />
        <Route path="*" element={<motion.div initial={{ opacity: 0, y: 10}}  animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><NotFoundSection /></motion.div>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
