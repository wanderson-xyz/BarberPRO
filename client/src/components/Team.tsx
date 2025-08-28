import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Marcus Johnson",
      role: "Master Barber",
      experience: "15+ years experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "David Rodriguez",
      role: "Senior Stylist",
      experience: "10+ years experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "James Wilson",
      role: "Barber",
      experience: "8+ years experience",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Alex Thompson",
      role: "Specialist",
      experience: "6+ years experience",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="team-title"
          >
            Meet Our Professionals
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="team-subtitle"
          >
            Our experienced team of master barbers and stylists are here to provide you with exceptional service
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center"
              data-testid={`team-member-${member.name.toLowerCase().replace(' ', '-')}`}
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                data-testid={`team-member-image-${member.name.toLowerCase().replace(' ', '-')}`}
              />
              <h3 
                className="text-xl font-semibold mb-2"
                data-testid={`team-member-name-${member.name.toLowerCase().replace(' ', '-')}`}
              >
                {member.name}
              </h3>
              <p 
                className="text-accent font-medium mb-2"
                data-testid={`team-member-role-${member.name.toLowerCase().replace(' ', '-')}`}
              >
                {member.role}
              </p>
              <p 
                className="text-muted-foreground text-sm"
                data-testid={`team-member-experience-${member.name.toLowerCase().replace(' ', '-')}`}
              >
                {member.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
