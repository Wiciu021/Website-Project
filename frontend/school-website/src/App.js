import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection"; 
import ForStudent from "./components/for-student-section/ForStudent";
import Feed from "./components/feed-section/Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ForStudent />
      <Feed />
    </div>
  );
}

export default App;
