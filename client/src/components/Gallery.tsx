import React from "react";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Professional haircut service",
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Professional barber tools",
    },
    {
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Modern barbershop interior",
    },
    {
      src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Professional beard trimming service",
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Hair styling with premium products",
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Classic hot towel shave",
    },
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="gallery-title"
          >
            Latest Photo Gallery
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="gallery-subtitle"
          >
            Take a look at our recent work and the premium experience we provide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              data-testid={`gallery-image-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
