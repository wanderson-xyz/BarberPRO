import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Business Executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "Exceptional service and attention to detail. The team at BarberPro transformed my look completely. I've never felt more confident!",
    },
    {
      name: "David Martinez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "The premium package is worth every penny. Professional staff, great atmosphere, and the best haircut I've ever had.",
    },
    {
      name: "Robert Taylor",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "Been coming here for 2 years now. Consistent quality, friendly service, and always leave feeling like a million bucks.",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const showTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="testimonials-title"
          >
            What Our Client Says
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="testimonials-subtitle"
          >
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 text-center min-h-[300px] flex items-center">
            <div 
              className="w-full"
              data-testid={`testimonial-slide-${currentTestimonial}`}
            >
              <img
                src={testimonials[currentTestimonial].image}
                alt={`${testimonials[currentTestimonial].name} - Customer`}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                data-testid={`testimonial-image-${currentTestimonial}`}
              />
              <blockquote 
                className="text-lg md:text-xl text-muted-foreground mb-6 italic"
                data-testid={`testimonial-quote-${currentTestimonial}`}
              >
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div 
                className="font-semibold text-accent"
                data-testid={`testimonial-name-${currentTestimonial}`}
              >
                {testimonials[currentTestimonial].name}
              </div>
              <div 
                className="text-muted-foreground text-sm"
                data-testid={`testimonial-role-${currentTestimonial}`}
              >
                {testimonials[currentTestimonial].role}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => showTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-accent" : "bg-muted"
                }`}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
