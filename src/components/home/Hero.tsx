import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container py-20 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Soluciones integrales de{" "}
                <span className="gradient-hero bg-clip-text text-transparent">
                  suministros empresariales
                </span>{" "}
                para tu empresa
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Atendemos Lima y provincias con entregas confiables, soporte experto 
                y precios competitivos por volumen.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/productos">
                  Ver Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="cta" size="xl" asChild>
                <Link to="/cotizacion">Pedir Cotización</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Productos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">24h</div>
                <div className="text-sm text-muted-foreground">Respuesta</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border bg-muted/50">
              <img
                src={heroImage}
                alt="Suministros empresariales - productos de oficina, limpieza y packaging"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full gradient-primary opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full gradient-secondary opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;