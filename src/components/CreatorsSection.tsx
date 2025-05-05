
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const creators = [
  {
    name: "Tshering Dorji",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Thimphu, Bhutan",
    tags: ["Interface Design", "Prototyping", "User Research"]
  },
  {
    name: "Karma Wangchuk",
    role: "Front-end Developer",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    location: "Paro, Bhutan",
    tags: ["React", "Tailwind CSS", "TypeScript"]
  },
  {
    name: "Pema Yangzom",
    role: "Motion Designer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "Punakha, Bhutan",
    tags: ["After Effects", "3D Animation", "Illustration"]
  },
  {
    name: "Dorji Tshering",
    role: "Brand Strategist",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    location: "Bumthang, Bhutan",
    tags: ["Brand Identity", "Marketing", "Strategy"]
  },
];

const CreatorsSection = () => {
  const [activeCreator, setActiveCreator] = useState<number | null>(null);
  const { toast } = useToast();
  
  const handleCreatorClick = (creatorIndex: number, creatorName: string) => {
    setActiveCreator(creatorIndex);
    
    toast({
      title: `Connecting with ${creatorName}`,
      description: "Opening creator profile...",
      duration: 2000,
    });
    
    setTimeout(() => {
      setActiveCreator(null);
    }, 1000);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Connect with <span className="text-gradient">Top Creators</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find and collaborate with talented professionals from Bhutan and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {creators.map((creator, index) => (
            <div 
              key={index} 
              className={`glass-card flex flex-col items-center text-center group ${
                activeCreator === index ? 'ring-2 ring-primary ring-offset-4 ring-offset-background' : ''
              } transition-all duration-300`}
            >
              <div 
                className="relative w-24 h-24 rounded-full mb-4 overflow-hidden border-2 border-primary p-1 group-hover:scale-105 transition-transform cursor-pointer"
                onClick={() => handleCreatorClick(index, creator.name)}
              >
                <Avatar className="w-full h-full">
                  <AvatarImage src={creator.avatar} alt={creator.name} />
                  <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {activeCreator === index && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
                )}
              </div>
              <h3 className="font-display font-semibold text-xl mb-1">{creator.name}</h3>
              <p className="text-primary font-medium mb-1">{creator.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{creator.location}</p>
              
              <div className="mb-6 space-y-1">
                {creator.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full inline-block mr-1 mb-1">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="rounded-full w-full group-hover:bg-primary group-hover:text-white transition-colors"
              >
                View Profile
              </Button>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="rounded-full px-8">
            Discover More Creators
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
