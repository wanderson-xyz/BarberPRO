import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import AppointmentForm from "./components/AppointmentForm";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <>
      <Helmet>
        <title>BarberPro - Premium Barbershop Experience</title>
        <meta name="description" content="Professional barbershop services with expert stylists. Book your appointment today for premium cuts, styling, and grooming services." />
        <meta name="keywords" content="barbershop, hair cut, styling, grooming, professional, appointment" />
        <meta property="og:title" content="BarberPro - Premium Barbershop Experience" />
        <meta property="og:description" content="Professional barbershop services with expert stylists. Book your appointment today for premium cuts, styling, and grooming services." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Team />
          <AppointmentForm />
          <Gallery />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}

export default App;
