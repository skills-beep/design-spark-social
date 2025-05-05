
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const HeroSection = () => {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Join a community of creative professionals and bring your collaborative projects to life. Connect with designers, developers, writers and artists in real time.";
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 30);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background blurred circles with interactive effect */}
      <div className={`absolute top-20 left-1/4 w-96 h-96 bg-creative-purple/20 rounded-full blur-[100px] transition-all duration-500 ${hovered ? 'scale-110' : 'scale-100'}`} />
      <div className={`absolute bottom-20 right-1/4 w-96 h-96 bg-creative-blue/20 rounded-full blur-[100px] transition-all duration-500 ${hovered ? 'transform translate-x-10' : ''}`} />
      
      {/* Floating particles */}
      {theme === 'dark' && Array.from({ length: 5 }).map((_, index) => (
        <div 
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
            animation: `floating ${Math.random() * 3 + 3}s ease-in-out infinite alternate`
          }}
        />
      ))}
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Connect, Collaborate, <span className="text-gradient glowing">Create</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 h-28">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="rounded-full text-md px-8 hover-grow"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-md px-8 hover-grow">
                Explore Projects
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-slide-up">
            <div 
              className="relative z-10 transform transition-all duration-300 hover:scale-105 hover:rotate-1"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-creative-purple to-creative-blue p-1">
                <div className="w-full h-full rounded-lg bg-card flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Interactive profile card */}
                  <div className="text-center z-10">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-creative-teal to-creative-indigo mx-auto mb-4 overflow-hidden">
                      <img 
                        src="https://randomuser.me/api/portraits/women/42.jpg" 
                        alt="Creator" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-1">Dema Wangchuk</h3>
                    <p className="text-muted-foreground">UI Designer & Developer</p>
                    
                    {/* Skills pills */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {['Figma', 'React', 'TailwindCSS'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-primary/10 text-primary-foreground text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute rounded-full bg-white/10"
                      style={{
                        width: `${Math.random() * 20 + 5}px`,
                        height: `${Math.random() * 20 + 5}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `floating ${Math.random() * 3 + 2}s ease-in-out infinite alternate`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute -top-8 -left-8 glass-card w-40 animate-pulse">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400" size={14} />
                  <div className="h-2 w-12 bg-creative-purple rounded mb-2"></div>
                </div>
                <div className="h-2 w-24 bg-muted rounded"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card w-48">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-creative-blue"></div>
                  <div className="h-2 w-24 bg-muted rounded"></div>
                </div>
                <div className="h-2 w-32 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
