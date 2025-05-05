import { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Github, Crown } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Footer = () => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-creative-purple to-creative-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-display font-bold">CreativeSpark</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Connecting creative professionals worldwide for collaboration and innovation.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/discover" className="text-muted-foreground hover:text-primary transition-colors">Discover</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-primary transition-colors">Guides</Link></li>
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/press" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Developer credit section with enhanced Bhutanese design */}
        <div className="flex justify-center mb-12">
          <div
            className={`relative glass-card max-w-md text-center transform transition-all duration-500 ${
              isHovered ? "scale-105 shadow-xl" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Bhutanese patterns overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800')] bg-cover bg-center mix-blend-overlay -z-10 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-creative-purple/30 to-creative-blue/30 rounded-xl -z-10"></div>
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
              theme === "dark" ? "bg-[url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=870&auto=format&fit=crop')] opacity-20" : 
              "bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=870&auto=format&fit=crop')] opacity-10"
            } bg-cover bg-center -z-10`}></div>
            
            {/* Bhutanese border pattern */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-creative-purple via-creative-teal to-creative-blue"></div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-creative-blue via-creative-teal to-creative-purple"></div>
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-creative-purple via-creative-teal to-creative-blue"></div>
            <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-creative-blue via-creative-teal to-creative-purple"></div>
            
            {/* Crown icon with animation */}
            <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
              isHovered ? "text-creative-purple scale-125" : "text-primary/60"
            }`}>
              <Crown 
                size={36} 
                className={`${isHovered ? "animate-bounce" : ""} filter drop-shadow-md`}
                fill={isHovered ? "rgba(139, 92, 246, 0.3)" : "transparent"}
              />
            </div>
            
            <h3 className="font-display text-xl md:text-2xl font-bold mt-6 mb-2">
              <span className={`text-gradient ${isHovered ? "glowing" : ""}`}>Developed by</span>
            </h3>
            <p className={`text-lg font-semibold mb-1 transition-all duration-300 ${
              isHovered ? "scale-110 text-primary" : ""
            }`}>Bishal Sharma</p>
            <a 
              href="mailto:bishalsharma153@gmail.com" 
              className={`text-primary hover:underline inline-flex items-center justify-center gap-1 mb-2 transition-all duration-300 ${
                isHovered ? "font-bold" : ""
              }`}
            >
              bishalsharma153@gmail.com
            </a>
            
            <div className={`transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <div className="flex justify-center gap-3 mt-4 mb-2">
                <a href="https://github.com" 
                   className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors hover:rotate-12 transform duration-300">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com" 
                   className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors hover:-rotate-12 transform duration-300">
                  <Linkedin size={16} />
                </a>
                <a href="https://twitter.com" 
                   className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors hover:rotate-12 transform duration-300">
                  <Twitter size={16} />
                </a>
              </div>
              
              {/* Animated decorative element */}
              <div className="h-0.5 w-16 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 CreativeSpark. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
