import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection"; 
import ForStudent from "./components/for-student-section/ForStudent";
import Feed from "./components/feed-section/Feed";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function HomePage() {
  return (
    <>
      <HeroSection />
      <ForStudent />
      <Feed />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aktualnosci" element={<FeedPage />} />
          <Route path="/post/:id" element={<FeedPagePost />} />
          <Route path="/login" element={<LoginPopUp />} />
          <Route path="/dokumenty-szkolne" element={<DocumentsSection />} />
          <Route path="/zespol-nauczycieli" element={<TeachingStaffSection />} />
          <Route path="/informacje-dla-kandydatow" element={<CandidatesInfo />} />
          <Route path="/profile-klas" element={<ClassProfile />} />
          <Route path="/galeria" element={<PhotoGallerySection />} />
          <Route path="/historia" element={<SchoolHistorySection />} />
          <Route path="/ubezpieczenie" element={<InsuranceSection />} />
          <Route path="/osiagniecia" element={<AchievementsSection />} />
          <Route path="/osiagniecia/:id" element={<AnnualAchievements />} />
          <Route path="/matura" element={<MaturaSection />} />
          <Route path="*" element={<NotFoundSection />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
