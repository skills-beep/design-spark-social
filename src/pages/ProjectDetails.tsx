
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2, MessageSquare, Calendar, User, Tag, ExternalLink } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // In a real app, you would fetch project data based on ID
  // This is mock data with Bhutanese creator
  const project = {
    id: id || "1",
    title: "Traditional Bhutanese Art Gallery",
    description: "A comprehensive digital showcase of traditional Bhutanese paintings, sculptures, and textile arts with augmented reality viewing capabilities.",
    longDescription: "This project aims to preserve and promote traditional Bhutanese art forms through digital technology. Visitors can explore detailed 3D models of ancient artifacts, learn about the symbols and techniques used in traditional Bhutanese art, and even experience them in their own space through AR technology. The project includes interviews with master artisans and educational content about the cultural significance of different art styles.",
    creator: "Dorji Wangmo",
    creatorAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Art & Culture",
    tags: ["Traditional Art", "Digital Gallery", "Augmented Reality", "Cultural Heritage"],
    views: 1284,
    likes: 237,
    comments: 42,
    gallery: [
      "https://images.unsplash.com/photo-1612968990386-1b50ea662423?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1612968769256-9ab8e5efb5b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1601974912258-ad2e4d7792b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Project Navigation */}
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/projects" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </Link>
            </Button>
          </div>
          
          {/* Project Hero */}
          <div className="glass-card p-0 overflow-hidden mb-8">
            <div className="relative h-64 sm:h-80 md:h-96">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <span className="bg-primary/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                    {project.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Content */}
            <div className="lg:col-span-2">
              <div className="glass-card mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">About This Project</h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <p className="text-muted-foreground">{project.longDescription}</p>
              </div>
              
              {/* Project Gallery */}
              <div className="glass-card">
                <h2 className="font-display text-xl font-semibold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden h-40">
                      <img 
                        src={image} 
                        alt={`Gallery image ${index+1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Project Sidebar */}
            <div className="space-y-6">
              {/* Project Creator */}
              <div className="glass-card">
                <div className="flex items-center gap-4">
                  <img 
                    src={project.creatorAvatar} 
                    alt={project.creator}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{project.creator}</h3>
                    <p className="text-sm text-muted-foreground">Project Creator</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="default" className="flex-1 gap-1" size="sm">
                    <User size={14} />
                    <span>Follow</span>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-1" size="sm">
                    <MessageSquare size={14} />
                    <span>Message</span>
                  </Button>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="glass-card">
                <h3 className="font-semibold mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={16} className="text-muted-foreground" />
                    <span>Published on {project.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <User size={16} className="text-muted-foreground" />
                    <span>Created by {project.creator}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Tag size={16} className="text-muted-foreground" />
                    <span>{project.category}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Actions */}
              <div className="glass-card">
                <h3 className="font-semibold mb-4">Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="default" className="gap-2" size="sm">
                    <Heart size={16} />
                    <span>Like ({project.likes})</span>
                  </Button>
                  <Button variant="outline" className="gap-2" size="sm">
                    <Share2 size={16} />
                    <span>Share</span>
                  </Button>
                  <Button variant="outline" className="gap-2 col-span-2" size="sm">
                    <ExternalLink size={16} />
                    <span>Visit Project</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
