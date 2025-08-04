import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection"; 
import ForStudent from "./components/for-student-section/ForStudent";
import Feed from "./components/feed-section/Feed";
import ForParents from "./components/for-parents-section/ForParents";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ForStudent />
      <Feed />
      <ForParents />
      <Footer />
    </div>
  );
}

export default App;
