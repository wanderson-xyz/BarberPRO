import React from "react";
import { Scissors, Zap, Sparkles, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Cutting",
      description: "Professional hair cutting services with precision and style for all hair types",
    },
    {
      icon: Zap,
      title: "Beard Trimming",
      description: "Expert beard grooming and shaping to complement your facial features",
    },
    {
      icon: Sparkles,
      title: "Hot Towel Shave",
      description: "Traditional hot towel shave experience for the ultimate in relaxation",
    },
    {
      icon: Star,
      title: "Styling",
      description: "Complete styling services to perfect your look for any occasion",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="services-title"
          >
            Our Services
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="services-subtitle"
          >
            From classic cuts to modern styles, we offer comprehensive grooming services tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center hover:bg-card/80 transition-colors"
                data-testid={`service-card-${service.title.toLowerCase().replace(' ', '-')}`}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  data-testid={`service-title-${service.title.toLowerCase().replace(' ', '-')}`}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-muted-foreground"
                  data-testid={`service-description-${service.title.toLowerCase().replace(' ', '-')}`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
