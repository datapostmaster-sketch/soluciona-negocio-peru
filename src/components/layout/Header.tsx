import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import catalogoData from "@/data/catalogo.json";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos", hasDropdown: true },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <span className="text-sm font-bold text-white">SN</span>
          </div>
          <span className="hidden font-bold text-foreground sm:inline-block">
            SolucionaNegocio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex items-center space-x-1 text-sm font-medium transition-fast",
                        isActive(item.href)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-card">
                    <DropdownMenuItem asChild>
                      <Link
                        to="/productos"
                        className="w-full cursor-pointer font-medium"
                      >
                        Ver todas las categorías
                      </Link>
                    </DropdownMenuItem>
                    <div className="my-1 h-px bg-border" />
                    {catalogoData.categorias.map((categoria) => (
                      <DropdownMenuItem key={categoria.id} asChild>
                        <Link
                          to={`/productos/${categoria.id}`}
                          className="w-full cursor-pointer"
                        >
                          {categoria.nombre}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-fast",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="cta" asChild>
            <Link to="/cotizacion">Pedir Cotización</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t bg-card md:hidden">
          <nav className="container space-y-1 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium transition-fast",
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 space-y-1 border-l border-border pl-4">
                    {catalogoData.categorias.map((categoria) => (
                      <Link
                        key={categoria.id}
                        to={`/productos/${categoria.id}`}
                        className="block px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {categoria.nombre}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button variant="cta" className="w-full" asChild>
                <Link to="/cotizacion">Pedir Cotización</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;