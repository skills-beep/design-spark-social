
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Bookmark, Check, Filter } from "lucide-react";

const Resources = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Resources data
  const resourceCategories = [
    {
      title: "Design Resources",
      description: "Tools, templates, and assets for designers",
      items: [
        {
          title: "Traditional Bhutanese Pattern Pack",
          description: "A collection of authentic Bhutanese patterns for digital design projects",
          type: "Download",
          author: "Kinley Wangchuk",
          popular: true
        },
        {
          title: "Himalayan Color Palette Collection",
          description: "Nature-inspired color schemes from the Himalayan landscapes",
          type: "Tool",
          author: "Tshering Yangzom"
        },
        {
          title: "Typography Guide for Dzongkha",
          description: "Best practices for using Dzongkha script in digital interfaces",
          type: "Guide",
          author: "Dorji Thinley"
        }
      ]
    },
    {
      title: "Development Resources",
      description: "Code snippets, libraries, and tools for developers",
      items: [
        {
          title: "Multi-language UI Components",
          description: "React components supporting Dzongkha and English interfaces",
          type: "Library",
          author: "Pema Dorji"
        },
        {
          title: "Accessibility Guidelines for Bhutanese Websites",
          description: "Making digital content accessible to all Bhutanese users",
          type: "Guide",
          author: "Chimi Dema",
          popular: true
        },
        {
          title: "Offline-First Data Sync Solution",
          description: "Tools for building apps that work in areas with limited connectivity",
          type: "Tool",
          author: "Sonam Tobgay"
        }
      ]
    },
    {
      title: "Business Resources",
      description: "Templates, guides, and tools for creative entrepreneurs",
      items: [
        {
          title: "Creative Freelancer Contract Template",
          description: "Legal templates customized for Bhutanese creative professionals",
          type: "Template",
          author: "Tashi Dorji",
          popular: true
        },
        {
          title: "Grant Opportunities for Bhutanese Creators",
          description: "Updated list of grants and funding opportunities",
          type: "Guide",
          author: "Karma Yangden"
        },
        {
          title: "Cultural Export Guidelines",
          description: "Information on exporting Bhutanese creative works internationally",
          type: "Guide",
          author: "Jigme Tenzin"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-accent/10 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Creative Resources
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Free and premium resources to help you bring your creative projects to life.
            </p>
            
            {/* Filter Options */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full bg-background/50 hover:bg-background/80 flex items-center gap-2">
                <Filter size={14} />
                <span>All Resources</span>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Design</Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Development</Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Business</Button>
              <Button variant="ghost" size="sm" className="rounded-full bg-background/50 hover:bg-background/80">Education</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Sections */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          {resourceCategories.map((category, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h2 className="font-display text-2xl font-bold mb-2">{category.title}</h2>
              <p className="text-muted-foreground mb-6">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <div 
                    key={index} 
                    className={`glass-card hover-lift transition-all ${item.popular ? 'border-l-4 border-primary' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
                        {item.type}
                      </span>
                      {item.popular && (
                        <span className="flex items-center text-xs text-primary">
                          <Check size={12} className="mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                    <p className="text-xs mb-4">By {item.author}</p>
                    
                    <div className="flex gap-2">
                      {item.type === 'Download' ? (
                        <Button variant="default" size="sm" className="rounded-full gap-1 flex-1">
                          <Download size={14} />
                          <span>Download</span>
                        </Button>
                      ) : (
                        <Button variant="default" size="sm" className="rounded-full gap-1 flex-1">
                          <ExternalLink size={14} />
                          <span>Access</span>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <Bookmark size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resources;
