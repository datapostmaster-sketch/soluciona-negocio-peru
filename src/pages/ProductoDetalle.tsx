import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle } from "lucide-react";
import catalogoData from "@/data/catalogo.json";

const ProductoDetalle = () => {
  const { categoria, slug } = useParams<{ categoria: string; slug: string }>();
  
  const categoriaData = catalogoData.categorias.find(
    (cat) => cat.id === categoria
  );
  
  const producto = categoriaData?.productos.find(
    (prod) => prod.id === slug
  );

  if (!categoriaData || !producto) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
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
        <Link to={`/productos/${categoria}`} className="hover:text-foreground">
          {categoriaData.nombre}
        </Link>
        <span>/</span>
        <span className="text-foreground">{producto.nombre}</span>
      </nav>

      {/* Back Button */}
      <Button variant="ghost" className="mb-8" asChild>
        <Link to={`/productos/${categoria}`}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a {categoriaData.nombre}
        </Link>
      </Button>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Image Placeholder */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border bg-muted/50">
            <div className="flex h-full items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-4xl">📦</div>
                <p className="text-muted-foreground">Imagen del producto</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">{producto.sku}</Badge>
              <Badge variant="outline">Por {producto.unidad}</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {producto.nombre}
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              {producto.descripcion}
            </p>
          </div>

          {/* Características */}
          <Card>
            <CardHeader>
              <CardTitle>Características Técnicas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {producto.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTAs */}
          <div className="space-y-4">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full" 
              asChild
            >
              <Link to={`/cotizacion?categoria=${categoria}&producto=${producto.id}`}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Cotización
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full" 
              asChild
            >
              <a 
                href={`https://wa.me/51987654321?text=Hola,%20necesito%20información%20sobre%20${producto.nombre}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <Card>
            <CardHeader>
              <CardTitle>Información Adicional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">SKU:</span>
                <span className="font-medium">{producto.sku}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Unidad de venta:</span>
                <span className="font-medium">{producto.unidad}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Categoría:</span>
                <span className="font-medium">{categoriaData.nombre}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Otros productos en {categoriaData.nombre}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categoriaData.productos
            .filter(p => p.id !== producto.id)
            .slice(0, 3)
            .map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {relatedProduct.nombre}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {relatedProduct.descripcion}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/productos/${categoria}/${relatedProduct.id}`}>
                      Ver detalles
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;