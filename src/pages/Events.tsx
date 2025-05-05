
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const Events = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Events with Bhutanese locations and organizers
  const events = [
    {
      id: 1,
      title: "Creative Design Summit",
      date: "June 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Royal University of Bhutan, Thimphu",
      description: "A day-long summit featuring talks from leading Bhutanese designers and international guests.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      organizer: "Bhutan Design Association"
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "July 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Bhutan Innovation Hub, Paro",
      description: "Hands-on workshop teaching modern web development techniques for beginners and intermediates.",
      image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      organizer: "Druk Code Club"
    },
    {
      id: 3,
      title: "Traditional Arts Exhibition",
      date: "August 5-10, 2025",
      time: "All Day",
      location: "National Art Gallery, Thimphu",
      description: "Exhibition showcasing the fusion of traditional Bhutanese arts with modern digital techniques.",
      image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      organizer: "Royal Textiles Academy"
    },
    {
      id: 4,
      title: "Photography & Storytelling",
      date: "September 18, 2025",
      time: "1:00 PM - 6:00 PM",
      location: "Clock Tower Square, Thimphu",
      description: "Workshop focusing on visual storytelling techniques for photographers of all skill levels.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      organizer: "Bhutan Photography Club"
    }
  ];

  // Featured event (first in the list)
  const featuredEvent = events[0];
  const upcomingEvents = events.slice(1);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Creative Events
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Discover workshops, conferences, and meetups for creative professionals across Bhutan.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Event */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-6">Featured Event</h2>
          
          <div className="glass-card p-0 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src={featuredEvent.image} 
                  alt={featuredEvent.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <h3 className="font-display text-xl font-bold mb-2">{featuredEvent.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredEvent.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>
                
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2">
                    Register Now
                  </Button>
                  <Button variant="outline" className="gap-2">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-6">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="glass-card hover-lift overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="mt-4 w-full rounded-full flex items-center justify-between">
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </Button>
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

export default Events;
