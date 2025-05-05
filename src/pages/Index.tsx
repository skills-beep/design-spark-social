
import { useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CreatorsSection from "@/components/CreatorsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  const { theme } = useTheme();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Moon in dark mode */}
      {theme === 'dark' && (
        <div className="moon-container">
          <div className="moon"></div>
        </div>
      )}
      
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <CreatorsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
