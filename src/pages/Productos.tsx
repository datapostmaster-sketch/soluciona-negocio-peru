import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
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

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = catalogoData.categorias.filter((categoria) =>
    categoria.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    categoria.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Nuestros{" "}
          <span className="gradient-hero bg-clip-text text-transparent">
            Productos
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explora nuestro catálogo completo de suministros empresariales organizados 
          por categorías para facilitar tu búsqueda.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar categorías..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((categoria) => (
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
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {categoria.nombre}
                </CardTitle>
                <CardDescription className="text-base">
                  {categoria.descripcion}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {categoria.productos.length} productos disponibles
                  </div>
                  <div className="flex items-center text-sm text-primary group-hover:text-primary-dark transition-colors">
                    <span className="font-medium">Ver productos</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* No results */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No se encontraron categorías que coincidan con tu búsqueda.</p>
        </div>
      )}

      {/* CTA Section */}
      <div className="text-center mt-16 p-8 rounded-2xl bg-muted/50">
        <h2 className="text-2xl font-bold mb-4">¿No encontraste lo que buscas?</h2>
        <p className="text-muted-foreground mb-6">
          Contáctanos y te ayudamos a encontrar el producto perfecto para tu empresa.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button variant="cta" size="lg" asChild>
            <Link to="/cotizacion">Solicitar Cotización</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contacto">Contactar Asesor</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Productos;