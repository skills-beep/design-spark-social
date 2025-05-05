
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background blurred circles */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-creative-purple/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-creative-blue/20 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Connect, Collaborate, <span className="text-gradient">Create</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Join a community of creative professionals and bring your collaborative projects to life. Connect with designers, developers, writers and artists in real time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full text-md px-8">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-md px-8">
                Explore Projects
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-slide-up">
            <div className="relative z-10">
              <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-creative-purple to-creative-blue p-1">
                <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 rounded-full bg-muted mx-auto mb-4"></div>
                    <div className="h-6 w-36 bg-muted rounded mx-auto mb-2"></div>
                    <div className="h-4 w-24 bg-muted rounded mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute -top-8 -left-8 glass-card w-40 animate-pulse">
                <div className="h-2 w-12 bg-creative-purple rounded mb-2"></div>
                <div className="h-2 w-24 bg-muted rounded"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card w-48">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-creative-blue"></div>
                  <div className="h-2 w-24 bg-muted rounded"></div>
                </div>
                <div className="h-2 w-32 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
