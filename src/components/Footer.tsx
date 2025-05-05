
import { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
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
        
        {/* Developer credit section */}
        <div className="flex justify-center mb-12">
          <div
            className={`relative glass-card max-w-md text-center transform transition-all duration-500 ${
              isHovered ? "scale-105 shadow-xl" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-creative-purple/20 to-creative-blue/20 rounded-xl -z-10"></div>
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
              theme === "dark" ? "bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=870&auto=format&fit=crop')] opacity-20" : 
              "bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=870&auto=format&fit=crop')] opacity-10"
            } bg-cover bg-center -z-10`}></div>
            
            <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
              <span className="text-gradient">Developed by</span>
            </h3>
            <p className="text-lg font-semibold mb-1">Bishal Sharma</p>
            <a 
              href="mailto:bishalsharma153@gmail.com" 
              className="text-primary hover:underline inline-flex items-center justify-center gap-1 mb-2"
            >
              bishalsharma153@gmail.com
            </a>
            
            <div className={`flex justify-center transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0 -translate-y-4"}`}>
              <div className="flex gap-3 mt-2">
                <a href="https://github.com" className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com" className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="https://twitter.com" className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Twitter size={16} />
                </a>
              </div>
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
