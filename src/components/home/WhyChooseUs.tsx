import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, HeadphonesIcon, FileText, TrendingUp, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Entregas en Lima en 24-48h y a provincias en 3-5 días hábiles con seguimiento completo."
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Especializado",
    description: "Equipo técnico dedicado para asesorarte en la selección de productos y resolver dudas."
  },
  {
    icon: FileText,
    title: "Facturación Empresarial",
    description: "Facturación electrónica inmediata, crédito comercial y reportes detallados para tu contabilidad."
  },
  {
    icon: TrendingUp,
    title: "Precios por Volumen",
    description: "Descuentos progresivos según cantidad y mejores condiciones para compras recurrentes."
  },
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description: "Productos certificados con garantía y políticas de devolución sin complicaciones."
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Plataforma online siempre disponible para consultas, cotizaciones y seguimiento de pedidos."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Por Qué Elegir{" "}
            <span className="gradient-hero bg-clip-text text-transparent">
              SolucionaNegocio?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más de 8 años respaldando el crecimiento de empresas peruanas con 
            soluciones confiables y servicio excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-card group hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;