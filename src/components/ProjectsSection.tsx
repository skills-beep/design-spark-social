
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const projectCards = [
  {
    id: 1,
    title: "Traditional Textile Design",
    creator: "Dema Wangchuck",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    category: "Art & Culture",
    likes: 128,
    comments: 32,
    views: 1.4,
    image: "https://images.unsplash.com/photo-1612968790286-7d6cf7c2cce3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Traditional Art", "Textiles", "Cultural"],
    color: "from-creative-purple to-creative-pink"
  },
  {
    id: 2,
    title: "Himalayan Photography Series",
    creator: "Tshering Dorji",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    category: "Photography",
    likes: 97,
    comments: 24,
    views: 1.1,
    image: "https://images.unsplash.com/photo-1605649461784-7e4008ac3291?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Photography", "Landscape", "Mountains"],
    color: "from-creative-blue to-creative-teal"
  },
  {
    id: 3,
    title: "Dzongkha Mobile App",
    creator: "Karma Yangzom",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    category: "UI/UX Design",
    likes: 156,
    comments: 42,
    views: 2.3,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["App Design", "Language", "Education"],
    color: "from-creative-indigo to-creative-blue"
  }
];

const ProjectsSection = () => {
  const [activeCreator, setActiveCreator] = useState<number | null>(null);
  const { toast } = useToast();
  
  const handleCreatorClick = (creatorId: number, creatorName: string) => {
    setActiveCreator(creatorId);
    
    // Show a toast when clicking on a creator
    toast({
      title: `Connecting with ${creatorName}`,
      description: "Opening creator profile...",
      duration: 2000,
    });
    
    // Reset the active state after animation completes
    setTimeout(() => {
      setActiveCreator(null);
    }, 1000);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Trending Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover what creative professionals are working on right now
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/projects">
              <Button variant="outline" className="rounded-full">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCards.map((project) => (
            <div key={project.id} className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className={`relative cursor-pointer transition-all duration-300 ${
                      activeCreator === project.id ? 'scale-110' : ''
                    }`}
                    onClick={() => handleCreatorClick(project.id, project.creator)}
                  >
                    <img 
                      src={project.avatar} 
                      alt={project.creator} 
                      className={`w-10 h-10 rounded-full transition-all duration-300 ${
                        activeCreator === project.id ? 'ring-4 ring-primary ring-offset-2' : ''
                      }`}
                    />
                    {activeCreator === project.id && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{project.creator}</h4>
                    <span className="text-xs text-muted-foreground">{project.category}</span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart size={16} className="hover:text-red-500 cursor-pointer transition-colors" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={16} />
                      <span>{project.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{project.views}k</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
