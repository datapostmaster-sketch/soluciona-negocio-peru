import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-2xl gradient-hero p-12 text-center text-white">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              ¿Necesitas una cotización hoy?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Obtén precios actualizados y condiciones especiales para tu empresa. 
              Te respondemos en menos de 1 día hábil.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <Button 
                variant="secondary" 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <Link to="/cotizacion">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <a 
                  href="https://wa.me/51987654321?text=Hola,%20quisiera%20una%20cotización"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Directo
                </a>
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-white/10 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;