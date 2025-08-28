import React from "react";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-accent">BarberPro</span>
            </div>
            <p className="text-muted-foreground mb-4" data-testid="footer-description">
              Experience premium grooming services with our expert team in a sophisticated environment.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/barberpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/barberpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5551987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="social-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="footer-quick-links-title">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-accent transition-colors" data-testid="footer-link-home">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors" data-testid="footer-link-about">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors" data-testid="footer-link-services">Services</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-accent transition-colors" data-testid="footer-link-pricing">Pricing</a></li>
              <li><a href="#team" className="text-muted-foreground hover:text-accent transition-colors" data-testid="footer-link-team">Our Team</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="footer-services-title">
              Services
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground" data-testid="footer-service-hair-cutting">Hair Cutting</li>
              <li className="text-muted-foreground" data-testid="footer-service-beard-trimming">Beard Trimming</li>
              <li className="text-muted-foreground" data-testid="footer-service-hot-towel">Hot Towel Shave</li>
              <li className="text-muted-foreground" data-testid="footer-service-styling">Hair Styling</li>
              <li className="text-muted-foreground" data-testid="footer-service-facial">Facial Treatment</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="footer-contact-title">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3 text-accent" />
                <span data-testid="footer-address">123 Style Street, City, State 12345</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <span data-testid="footer-phone">(555) 123-4567</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span data-testid="footer-email">info@barberpro.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            &copy; 2024 BarberPro. All rights reserved. | Designed with care for premium grooming experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
