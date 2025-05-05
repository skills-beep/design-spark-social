
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Search, Bell, MessageSquare } from "lucide-react";
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
                <Link to="/" className="font-medium hover:text-primary transition-colors px-3 py-2">Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/discover" className="font-medium hover:text-primary transition-colors px-3 py-2">Discover</Link>
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
                <Link to="/community" className="font-medium hover:text-primary transition-colors px-3 py-2">Community</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
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
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden rounded-full bg-background/60 hover:bg-background/80 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile menu with improved animation and styling */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass-effect animate-slide-up border-t border-white/10 shadow-lg">
          <div className="flex flex-col p-4 space-y-1">
            <Link to="/" className="flex items-center px-4 py-3 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setIsOpen(false)}>
              <span className="font-medium">Home</span>
            </Link>
            <Link to="/discover" className="flex items-center px-4 py-3 rounded-lg bg-white/10 text-primary font-medium" onClick={() => setIsOpen(false)}>
              <span>Discover</span>
            </Link>
            <Link to="/projects" className="flex items-center px-4 py-3 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setIsOpen(false)}>
              <span className="font-medium">Projects</span>
            </Link>
            <Link to="/community" className="flex items-center px-4 py-3 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setIsOpen(false)}>
              <span className="font-medium">Community</span>
            </Link>
            
            <div className="h-px bg-white/10 my-2"></div>
            
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="rounded-full bg-background/60 hover:bg-background/80">
                  <Search size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-background/60 hover:bg-background/80">
                  <Bell size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-background/60 hover:bg-background/80">
                  <MessageSquare size={18} />
                </Button>
              </div>
              <Button variant="default" size="sm" className="rounded-full shadow-md">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
