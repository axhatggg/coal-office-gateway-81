
import Header from "../components/Header";
import SlideshowBackground from "../components/SlideshowBackground";
import HeroSection from "../components/HeroSection";
import ProcessManagement from "../components/ProcessManagement";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative">
      {/* Slideshow Background */}
      <SlideshowBackground />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <HeroSection />

      {/* Process Management Section */}
      <ProcessManagement />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
