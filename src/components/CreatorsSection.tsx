
import { Button } from "@/components/ui/button";

const creators = [
  {
    name: "Jessica Chen",
    role: "UI/UX Designer",
    avatar: "/placeholder.svg",
    location: "San Francisco, CA",
    tags: ["Interface Design", "Prototyping", "User Research"]
  },
  {
    name: "Marcus Williams",
    role: "Front-end Developer",
    avatar: "/placeholder.svg",
    location: "Berlin, Germany",
    tags: ["React", "Tailwind CSS", "TypeScript"]
  },
  {
    name: "Emma Rodriguez",
    role: "Motion Designer",
    avatar: "/placeholder.svg",
    location: "London, UK",
    tags: ["After Effects", "3D Animation", "Illustration"]
  },
  {
    name: "David Kim",
    role: "Brand Strategist",
    avatar: "/placeholder.svg",
    location: "New York, NY",
    tags: ["Brand Identity", "Marketing", "Strategy"]
  },
];

const CreatorsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Connect with <span className="text-gradient">Top Creators</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find and collaborate with talented professionals from around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {creators.map((creator, index) => (
            <div key={index} className="glass-card flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full mb-4 overflow-hidden border-2 border-primary p-1 group-hover:scale-105 transition-transform">
                <img 
                  src={creator.avatar} 
                  alt={creator.name} 
                  className="w-full h-full rounded-full object-cover" 
                />
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
              
              <Button variant="outline" className="rounded-full w-full group-hover:bg-primary group-hover:text-white transition-colors">
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
