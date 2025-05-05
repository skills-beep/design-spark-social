
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowRight } from "lucide-react";

const Projects = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data with Bhutanese creators
  const projects = [
    {
      id: "1",
      title: "Traditional Bhutanese Art Gallery",
      description: "A digital showcase of traditional Bhutanese paintings and sculptures with AR viewing capabilities.",
      creator: "Dorji Wangmo",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Art & Culture"
    },
    {
      id: "2",
      title: "Mountain Eco-Tourism Platform",
      description: "A platform connecting travelers with sustainable hiking experiences in the Himalayan mountains.",
      creator: "Tshering Penjor",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Tourism & Travel"
    },
    {
      id: "3",
      title: "Dzongkha Language Learning App",
      description: "Interactive application teaching Bhutan's native language through gamified experiences.",
      creator: "Karma Choden",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Education"
    },
    {
      id: "4",
      title: "Bhutanese Textile Marketplace",
      description: "E-commerce platform showcasing authentic handwoven textiles from Bhutanese artisans.",
      creator: "Namgay Dorji",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "E-commerce"
    },
    {
      id: "5",
      title: "Himalayan Weather Monitor",
      description: "Real-time weather tracking system specialized for mountain climbers and trekkers.",
      creator: "Phurba Tshering",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Technology"
    },
    {
      id: "6",
      title: "Bhutanese Festival Calendar",
      description: "Interactive calendar and guide to traditional Bhutanese festivals and celebrations.",
      creator: "Tashi Wangmo",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Culture & Events"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/30 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
              Creative Projects
            </h1>
            <p className="text-muted-foreground text-lg mb-8 text-center max-w-2xl mx-auto">
              Explore innovative projects from talented creators across Bhutan and collaborate on exciting new ideas.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto glass-effect rounded-full p-1 flex items-center shadow-lg">
              <div className="px-4">
                <Search size={20} className="text-muted-foreground" />
              </div>
              <input 
                type="text" 
                placeholder="Search projects by name, creator, or category..." 
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
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Art & Design</Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Technology</Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Education</Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Culture</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} className="glass-card group hover-lift overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs font-medium text-primary/80 mb-2">{project.category}</span>
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm">By {project.creator}</span>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
