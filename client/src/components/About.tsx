import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              data-testid="about-title"
            >
              About Us
            </h2>
            <p 
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
              data-testid="about-description-1"
            >
              At BarberPro, we combine traditional barbering techniques with modern style to deliver exceptional grooming experiences. Our team of skilled professionals is dedicated to helping you look and feel your best.
            </p>
            <p 
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
              data-testid="about-description-2"
            >
              With over 15 years of experience, we've built a reputation for precision, attention to detail, and outstanding customer service. Every visit is crafted to exceed your expectations.
            </p>
            <a
              href="#services"
              className="inline-flex bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              data-testid="button-learn-more"
            >
              Learn More
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern barbershop interior"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
