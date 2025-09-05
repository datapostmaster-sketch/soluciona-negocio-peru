import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import catalogoData from "@/data/catalogo.json";

// Import category images
import impresionImg from "@/assets/categorias/impresion.webp";
import oficinaImg from "@/assets/categorias/oficina.webp";
import limpiezaImg from "@/assets/categorias/limpieza.webp";
import tecnologiaImg from "@/assets/categorias/tecnologia.webp";

const imageMap: Record<string, string> = {
  'impresion': impresionImg,
  'oficina': oficinaImg,
  'limpieza': limpiezaImg,
  'tecnologia': tecnologiaImg,
};

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nuestras Categorías de Productos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra todo lo que necesitas para tu empresa en nuestro amplio catálogo
            de productos especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {catalogoData.categorias.map((categoria) => (
            <Card 
              key={categoria.id} 
              className="group cursor-pointer border-0 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 bg-card"
            >
              <Link to={`/productos/${categoria.id}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={imageMap[categoria.id]}
                    alt={categoria.nombre}
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {categoria.nombre}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {categoria.descripcion}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-sm text-primary group-hover:text-primary-dark transition-colors">
                    <span className="font-medium">Ver productos</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/productos">
              Ver Todas las Categorías
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;