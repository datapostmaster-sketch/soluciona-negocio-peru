import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Package, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold gradient-hero bg-clip-text text-transparent">404</h1>
          <h2 className="text-2xl font-bold text-foreground">Página no encontrada</h2>
          <p className="text-muted-foreground">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button variant="cta" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Ir al Inicio
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/productos">
              <Package className="mr-2 h-4 w-4" />
              Ver Productos
            </Link>
          </Button>
        </div>

        <div className="pt-4">
          <Button variant="ghost" asChild>
            <Link to="/contacto">
              <MessageCircle className="mr-2 h-4 w-4" />
              ¿Necesitas ayuda? Contáctanos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
