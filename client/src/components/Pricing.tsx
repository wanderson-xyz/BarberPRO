import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$25",
      features: ["Hair Cut", "Basic Styling", "Hair Wash"],
      popular: false,
    },
    {
      name: "Standard",
      price: "$45",
      features: [
        "Hair Cut & Styling",
        "Beard Trim",
        "Hair Wash & Condition",
        "Hot Towel Treatment",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$65",
      features: [
        "Full Service Package",
        "Hot Towel Shave",
        "Facial Treatment",
        "Premium Products",
        "Consultation",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="pricing-title"
          >
            Our Pricing Plans
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="pricing-subtitle"
          >
            Choose the perfect package for your grooming needs with transparent, competitive pricing
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 text-center relative ${
                plan.popular ? "border-2 border-accent" : ""
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium"
                  data-testid="pricing-popular-badge"
                >
                  Most Popular
                </div>
              )}
              <h3 
                className="text-2xl font-bold mb-2"
                data-testid={`pricing-plan-name-${plan.name.toLowerCase()}`}
              >
                {plan.name}
              </h3>
              <div 
                className="text-4xl font-bold text-accent mb-6"
                data-testid={`pricing-plan-price-${plan.name.toLowerCase()}`}
              >
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center justify-center"
                    data-testid={`pricing-feature-${plan.name.toLowerCase()}-${featureIndex}`}
                  >
                    <Check className="w-5 h-5 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
                data-testid={`button-choose-plan-${plan.name.toLowerCase()}`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
