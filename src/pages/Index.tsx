import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CreatorsSection from "@/components/CreatorsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SunEffect from "@/components/SunEffect";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeIcon, setShowThemeIcon] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Show theme icon with animation after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThemeIcon(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Toggle theme with animation
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Theme toggle button with animation */}
      <div 
        className={`fixed right-6 bottom-6 z-50 p-3 rounded-full glass-effect cursor-pointer transition-all duration-300 ${
          showThemeIcon ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        } hover:scale-110`}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <Sun className="text-yellow-200" size={24} />
        ) : (
          <Moon className="text-blue-400" size={24} />
        )}
      </div>
      
      {/* Interactive particle effect for scroll progress */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 h-1/3 w-1 rounded-full bg-muted overflow-hidden">
        <div 
          className="w-full bg-gradient-to-b from-creative-purple to-creative-blue rounded-full transition-all"
          style={{ 
            height: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`,
            opacity: isScrolled ? 1 : 0
          }}
        ></div>
      </div>
      
      {/* Moon in dark mode */}
      {theme === 'dark' && (
        <div className="moon-container animate-fade-in">
          <div className="moon animate-pulse"></div>
        </div>
      )}
      
      {/* Sun in light mode */}
      {theme === 'light' && <SunEffect />}
      
      {/* Interactive elements on the page */}
      <div className="relative">
        <HeroSection />
        
        {/* Interactive floating elements */}
        {isScrolled && (
          <>
            <div className="fixed top-1/4 left-1/4 w-32 h-32 rounded-full bg-creative-purple/10 animate-pulse blur-xl"></div>
            <div className="fixed bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-creative-blue/10 animate-pulse blur-xl"></div>
          </>
        )}
        
        <FeaturesSection />
        <ProjectsSection />
        <CreatorsSection />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
