
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, UserPlus } from "lucide-react";

const Community = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Bhutanese names for community members
  const communityMembers = [
    {
      name: "Tenzin Dorji",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "Thimphu, Bhutan"
    },
    {
      name: "Deki Yangzom",
      role: "Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "Paro, Bhutan"
    },
    {
      name: "Jigme Wangchuk",
      role: "Illustrator & Animator",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      location: "Punakha, Bhutan"
    },
    {
      name: "Sonam Choden",
      role: "Product Designer",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      location: "Bumthang, Bhutan"
    },
    {
      name: "Kinley Tshering",
      role: "3D Artist",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      location: "Wangdue, Bhutan"
    },
    {
      name: "Pema Lhamo",
      role: "Motion Graphics Designer",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      location: "Trongsa, Bhutan"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/30 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Connect With Creative Minds
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join our thriving community of designers, developers, and artists from around the world.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full gap-2">
                <Users size={18} />
                Join Community
              </Button>
              <Button size="lg" variant="outline" className="rounded-full gap-2">
                <MessageSquare size={18} />
                Open Forums
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Members Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Active Community Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet some of our most active community members who are always ready to collaborate and share their knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityMembers.map((member, index) => (
              <div key={index} className="glass-card hover-lift flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="h-16 w-16 rounded-full object-cover border-2 border-background"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                  <p className="text-xs mt-1">{member.location}</p>
                </div>
                <Button size="sm" variant="ghost" className="ml-auto rounded-full">
                  <UserPlus size={18} />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full">View All Community Members</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Community;
