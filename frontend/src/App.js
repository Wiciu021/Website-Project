import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection"; 
import ForStudent from "./components/for-student-section/ForStudent";
import Feed from "./components/feed-section/Feed";
import ForParents from "./components/for-parents-section/ForParents";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeedPage from "./components/feed-page/FeedPage";
import FeedPagePost from "./components/feed-page-post/FeedPagePost";
import LoginPopUp from "./components/login-popup/LoginPopUp";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ForStudent />
      <Feed />
      <ForParents />
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
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
