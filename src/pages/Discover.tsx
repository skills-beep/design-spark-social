
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const Discover = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section with Improved Visual Hierarchy */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/30 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
              Discover Creative Talent
            </h1>
            <p className="text-muted-foreground text-lg mb-8 text-center max-w-2xl mx-auto">
              Find designers, developers, writers, and artists to collaborate with on your next big project.
            </p>
            
            {/* Search Bar with improved styling */}
            <div className="relative max-w-2xl mx-auto glass-effect rounded-full p-1 flex items-center shadow-lg">
              <div className="px-4">
                <Search size={20} className="text-muted-foreground" />
              </div>
              <input 
                type="text" 
                placeholder="Search by skill, name, or project type..." 
                className="bg-transparent border-none flex-1 py-3 focus:outline-none text-foreground"
              />
              <Button size="sm" className="rounded-full mr-1">
                Search
              </Button>
            </div>
            
            {/* Filter Options */}
            <div className="flex flex-wrap justify-center mt-6 gap-2">
              <Button variant="outline" size="sm" className="rounded-full bg-background/50 hover:bg-background/80 flex items-center gap-2">
                <Filter size={14} />
                <span>All Categories</span>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Design</Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Development</Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Illustration</Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Writing</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Placeholder */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="glass-card flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-xl"></div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-xl mb-2">Creative Professional</h3>
                  <p className="text-muted-foreground mb-4">Designer & Developer with expertise in UI/UX and frontend development.</p>
                  <Button variant="outline" className="w-full rounded-lg">View Profile</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Discover;
