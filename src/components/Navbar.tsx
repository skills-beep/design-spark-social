
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Bell, MessageSquare, Sun, Moon, Stars } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  
  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "py-2 glass-effect shadow-md" 
        : "py-3 bg-transparent backdrop-blur-sm"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-creative-purple to-creative-blue flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="ml-2 text-xl font-display font-bold">CreativeSpark</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(
                  "font-medium transition-colors px-3 py-2",
                  location.pathname === "/" ? "text-primary" : "hover:text-primary"
                )}>Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/discover" className={cn(
                  "font-medium transition-colors px-3 py-2",
                  location.pathname === "/discover" ? "text-primary" : "hover:text-primary"
                )}>Discover</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/projects"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Projects
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Discover creative projects from our community
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/projects/featured" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Featured</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Top projects handpicked by our team
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/projects/new" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">New</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Recently added projects
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/community" className={cn(
                  "font-medium transition-colors px-3 py-2",
                  location.pathname === "/community" ? "text-primary" : "hover:text-primary"
                )}>Community</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/events" className={cn(
                  "font-medium transition-colors px-3 py-2",
                  location.pathname === "/events" ? "text-primary" : "hover:text-primary"
                )}>Events</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/resources" className={cn(
                  "font-medium transition-colors px-3 py-2",
                  location.pathname === "/resources" ? "text-primary" : "hover:text-primary"
                )}>Resources</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-background/50 hover:bg-background/80 transition-colors"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-background/50 hover:bg-background/80 transition-colors">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-background/50 hover:bg-background/80 transition-colors">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-background/50 hover:bg-background/80 transition-colors">
            <MessageSquare size={20} />
          </Button>
          <Button variant="default" className="rounded-full shadow-md hover:shadow-lg transition-all">Sign In</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-background/50 hover:bg-background/80 transition-colors"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-background/60 hover:bg-background/80 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu drawer with improved animation and styling */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm glass-effect shadow-lg transition-transform duration-300 ease-in-out transform md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-creative-purple to-creative-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-display font-bold">CreativeSpark</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col py-4 space-y-1">
              <Link to="/" className={cn(
                "flex items-center px-6 py-3 hover:bg-white/10 transition-colors",
                location.pathname === "/" ? "text-primary bg-white/10 border-l-2 border-primary" : ""
              )}>
                <span className="font-medium">Home</span>
              </Link>
              <Link to="/discover" className={cn(
                "flex items-center px-6 py-3 hover:bg-white/10 transition-colors",
                location.pathname === "/discover" ? "text-primary bg-white/10 border-l-2 border-primary" : ""
              )}>
                <span className="font-medium">Discover</span>
              </Link>
              <Link to="/projects" className={cn(
                "flex items-center px-6 py-3 hover:bg-white/10 transition-colors",
                location.pathname === "/projects" ? "text-primary bg-white/10 border-l-2 border-primary" : ""
              )}>
                <span className="font-medium">Projects</span>
              </Link>
              <Link to="/community" className={cn(
                "flex items-center px-6 py-3 hover:bg-white/10 transition-colors",
                location.pathname === "/community" ? "text-primary bg-white/10 border-l-2 border-primary" : ""
              )}>
                <span className="font-medium">Community</span>
              </Link>
              <Link to="/events" className={cn(
                "flex items-center px-6 py-3 hover:bg-white/10 transition-colors",
                location.pathname === "/events" ? "text-primary bg-white/10 border-l-2 border-primary" : ""
              )}>
                <span className="font-medium">Events</span>
              </Link>
              <Link to="/resources" className={cn(
                "flex items-center px-6 py-3 hover:bg-white/10 transition-colors",
                location.pathname === "/resources" ? "text-primary bg-white/10 border-l-2 border-primary" : ""
              )}>
                <span className="font-medium">Resources</span>
              </Link>

              <div className="h-px bg-white/10 my-2 mx-6"></div>
              
              <div className="px-6 space-y-2">
                <div className="flex items-center gap-3 py-2">
                  <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/60 hover:bg-background/80">
                    <Search size={18} />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/60 hover:bg-background/80">
                    <Bell size={18} />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/60 hover:bg-background/80">
                    <MessageSquare size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sign in button fixed at bottom */}
          <div className="p-4 border-t border-white/10">
            <Button variant="default" className="w-full rounded-full shadow-md">Sign In</Button>
          </div>
        </div>
      </div>
      
      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
