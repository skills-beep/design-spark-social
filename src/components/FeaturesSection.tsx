
import { MessageCircle, Users, Laptop, Palette } from "lucide-react";

const features = [
  {
    title: "Real-time Collaboration",
    description: "Work together with creative professionals in real time across different time zones and continents.",
    icon: MessageCircle,
    color: "bg-creative-purple",
  },
  {
    title: "Talent Discovery",
    description: "Find the perfect match for your creative project with our advanced talent discovery features.",
    icon: Users,
    color: "bg-creative-blue",
  },
  {
    title: "Project Management",
    description: "Manage your creative projects from concept to completion with intuitive tools.",
    icon: Laptop,
    color: "bg-creative-indigo",
  },
  {
    title: "Portfolio Showcase",
    description: "Display your best work and get discovered by clients and collaborators looking for your skills.",
    icon: Palette,
    color: "bg-creative-pink",
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything you need to <span className="text-gradient">spark creativity</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform provides all the tools creative professionals need to collaborate effectively and bring projects to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card hover:translate-y-[-5px] group"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white transition-transform group-hover:scale-110`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
