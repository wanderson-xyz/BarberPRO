import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "5551987654321";
  const message = "Olá! Gostaria de agendar um horário na BarberPro.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-float fixed bottom-6 right-6 z-50 flex items-center">
      <div 
        className="whatsapp-tooltip bg-accent text-accent-foreground px-3 py-2 rounded-lg mr-3 text-sm font-medium whitespace-nowrap"
        data-testid="whatsapp-tooltip"
      >
        Agende seu horário
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
