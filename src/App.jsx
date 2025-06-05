import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import NaveAnimada  from "./components/NaveAnimada";
import PageBackground from "./components/PageBackground";

function App() {
  return (
    <>
      <HeroSection />
      <PageBackground>
      <div className="max-w-7xl mx-auto pt-4 px-6">
        <NaveAnimada />
        <FeatureSection />
        <Testimonials />
        <Footer />
      </div>
      </PageBackground>
    </>
  )
}

export default App
