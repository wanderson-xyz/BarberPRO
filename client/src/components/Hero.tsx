import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          data-testid="hero-title"
        >
          We Are Looking to
          <span className="text-accent block">Make You Handsome</span>
        </h1>
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          data-testid="hero-subtitle"
        >
          Experience premium grooming services with our expert barbers in a sophisticated environment
        </p>
        <a
          href="#appointment"
          className="inline-flex bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          data-testid="button-book-appointment"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;
