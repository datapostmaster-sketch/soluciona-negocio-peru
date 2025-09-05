import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, MessageCircle } from "lucide-react";
import catalogoData from "@/data/catalogo.json";

const ProductoCategoria = () => {
  const { categoria } = useParams<{ categoria: string }>();
  
  const categoriaData = catalogoData.categorias.find(
    (cat) => cat.id === categoria
  );

  if (!categoriaData) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Categoría no encontrada</h1>
          <Button asChild>
            <Link to="/productos">Volver a Productos</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground">Inicio</Link>
        <span>/</span>
        <Link to="/productos" className="hover:text-foreground">Productos</Link>
        <span>/</span>
        <span className="text-foreground">{categoriaData.nombre}</span>
      </nav>

      {/* Back Button */}
      <Button variant="ghost" className="mb-8" asChild>
        <Link to="/productos">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Categorías
        </Link>
      </Button>

      {/* Category Header */}
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {categoriaData.nombre}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {categoriaData.descripcion}
        </p>
        <Badge variant="outline" className="text-sm">
          <Package className="mr-1 h-3 w-3" />
          {categoriaData.productos.length} productos disponibles
        </Badge>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoriaData.productos.map((producto) => (
          <Card 
            key={producto.id} 
            className="group cursor-pointer border-0 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 bg-card"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {producto.nombre}
              </CardTitle>
              <CardDescription className="text-sm">
                {producto.descripcion}
              </CardDescription>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{producto.sku}</Badge>
                <Badge variant="outline">Por {producto.unidad}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Características */}
              <div>
                <h4 className="text-sm font-medium mb-2">Características principales:</h4>
                <ul className="space-y-1">
                  {producto.caracteristicas.slice(0, 3).map((caracteristica, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      {caracteristica}
                    </li>
                  ))}
                  {producto.caracteristicas.length > 3 && (
                    <li className="text-sm text-primary">
                      +{producto.caracteristicas.length - 3} características más
                    </li>
                  )}
                </ul>
              </div>

              {/* CTA */}
              <Button 
                variant="cta" 
                className="w-full group-hover:scale-105 transition-transform" 
                asChild
              >
                <Link to={`/cotizacion?categoria=${categoria}&producto=${producto.id}`}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Solicitar Cotización
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 p-8 rounded-2xl bg-muted/50">
        <h2 className="text-2xl font-bold mb-4">¿Necesitas información adicional?</h2>
        <p className="text-muted-foreground mb-6">
          Nuestros asesores técnicos pueden ayudarte a elegir el producto ideal para tu aplicación específica.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button variant="cta" size="lg" asChild>
            <Link to={`/cotizacion?categoria=${categoria}`}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Solicitar Asesoría
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://wa.me/51987654321?text=Hola,%20necesito%20información%20sobre%20productos"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Directo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCategoria;