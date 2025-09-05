import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import empresaData from "@/data/empresa.json";

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${empresaData.empresa.whatsapp.replace(/\s/g, '')}?text=Hola,%20quisiera%20una%20cotización`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full bg-secondary hover:bg-secondary-dark shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;