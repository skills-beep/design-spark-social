
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Eye } from "lucide-react";

const projectCards = [
  {
    id: 1,
    title: "Modern App UI Design",
    creator: "Sarah Johnson",
    avatar: "/placeholder.svg",
    category: "UI/UX Design",
    likes: 128,
    comments: 32,
    views: 1.4,
    image: "/placeholder.svg",
    tags: ["UI Design", "Mobile App", "Minimal"],
    color: "from-creative-purple to-creative-pink"
  },
  {
    id: 2,
    title: "E-commerce Website Redesign",
    creator: "Alex Morgan",
    avatar: "/placeholder.svg",
    category: "Web Design",
    likes: 97,
    comments: 24,
    views: 1.1,
    image: "/placeholder.svg",
    tags: ["Web Design", "E-commerce", "UI"],
    color: "from-creative-blue to-creative-teal"
  },
  {
    id: 3,
    title: "Brand Identity System",
    creator: "Jordan Lee",
    avatar: "/placeholder.svg",
    category: "Branding",
    likes: 156,
    comments: 42,
    views: 2.3,
    image: "/placeholder.svg",
    tags: ["Branding", "Logo", "Identity"],
    color: "from-creative-indigo to-creative-blue"
  }
];

const ProjectsSection = () => {
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
            <Button variant="outline" className="rounded-full">
              View All Projects
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCards.map((project) => (
            <div key={project.id} className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className={`h-48 bg-gradient-to-r ${project.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover opacity-50" 
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={project.avatar} 
                    alt={project.creator} 
                    className="w-10 h-10 rounded-full" 
                  />
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
                      <Heart size={16} />
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
