import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection"; 
import ForStudent from "./components/for-student-section/ForStudent";
import Feed from "./components/feed-section/Feed";
import ForParents from "./components/for-parents-section/ForParents";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
