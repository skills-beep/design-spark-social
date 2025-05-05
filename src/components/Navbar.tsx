
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Search, Bell, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 glass-effect">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-creative-purple to-creative-blue flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="ml-2 text-xl font-display font-bold">CreativeSpark</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/discover" className="font-medium hover:text-primary transition-colors">Discover</Link>
          <Link to="/projects" className="font-medium hover:text-primary transition-colors">Projects</Link>
          <Link to="/community" className="font-medium hover:text-primary transition-colors">Community</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageSquare size={20} />
          </Button>
          <Button variant="default" className="rounded-full">Sign In</Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass-effect animate-fade-in p-4">
          <div className="flex flex-col gap-4">
            <Link to="/" className="font-medium py-2 hover:text-primary transition-colors">Home</Link>
            <Link to="/discover" className="font-medium py-2 hover:text-primary transition-colors">Discover</Link>
            <Link to="/projects" className="font-medium py-2 hover:text-primary transition-colors">Projects</Link>
            <Link to="/community" className="font-medium py-2 hover:text-primary transition-colors">Community</Link>
            <Button variant="default" className="w-full rounded-full">Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
