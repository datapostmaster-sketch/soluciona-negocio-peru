import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import empresaData from "@/data/empresa.json";

const Footer = () => {
  const quickLinks = [
    { name: "Productos", href: "/productos" },
    { name: "Cotización", href: "/cotizacion" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ];

  const legalLinks = [
    { name: "Políticas de Privacidad", href: "/politicas" },
    { name: "Términos y Condiciones", href: "/politicas" },
  ];

  return (
    <footer className="bg-muted border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <span className="text-sm font-bold text-white">SN</span>
              </div>
              <span className="font-bold text-foreground">SolucionaNegocio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Soluciones integrales de suministros empresariales para impulsar
              el crecimiento de tu negocio en todo el Perú.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" asChild>
                <a
                  href={`https://wa.me/${empresaData.empresa.whatsapp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-dark"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-fast"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {empresaData.empresa.direccion}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {empresaData.empresa.telefono}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {empresaData.empresa.email}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground whitespace-pre-line">
                  {empresaData.empresa.horarios}
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-fast"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-xs text-muted-foreground space-y-1">
              <p>{empresaData.empresa.razonSocial}</p>
              <p>RUC: {empresaData.empresa.ruc}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SolucionaNegocio Perú S.A.C. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-fast"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;