import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    position: "Gerente de Compras",
    company: "Distribuidora Lima Norte",
    content: "Excelente servicio y productos de calidad. Las entregas siempre puntuales y el soporte técnico muy profesional. Ya llevamos 3 años trabajando con ellos.",
    rating: 5
  },
  {
    name: "Carlos Mendoza",
    position: "Administrador",
    company: "Clínica San Rafael",
    content: "Los productos de limpieza e higiene que nos proveen son de primera calidad. Precios competitivos y facilidades de pago. Muy recomendados.",
    rating: 5
  },
  {
    name: "Ana Rodríguez",
    position: "Jefe de Logística", 
    company: "Textiles del Perú S.A.",
    content: "Encontramos todo lo que necesitamos en un solo lugar. El sistema de cotizaciones online es muy práctico y la atención personalizada excelente.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Lo Que Dicen Nuestros{" "}
            <span className="gradient-hero bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La confianza de más de 200 empresas nos respalda día a día.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-card group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <blockquote className="text-muted-foreground">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="border-t pt-4">
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;