import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import empresaData from "@/data/empresa.json";

const Nosotros = () => {
  return (
    <div className="container py-12">
      {/* Hero */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Conoce{" "}
          <span className="gradient-hero bg-clip-text text-transparent">
            SolucionaNegocio
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Más de 8 años siendo el socio confiable de empresas peruanas, 
          proporcionando soluciones integrales de suministros con calidad 
          y servicio excepcional.
        </p>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-3">
        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <CardTitle>Misión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{empresaData.empresa.mision}</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-secondary flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <CardTitle>Visión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{empresaData.empresa.vision}</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <CardTitle>Valores</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-left">
              {empresaData.empresa.valores.slice(0, 3).map((valor, index) => (
                <li key={index} className="flex items-start text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>{valor.split(':')[0]}:</strong> {valor.split(':')[1]}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Complete Values */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-center">Nuestros Valores Fundamentales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {empresaData.empresa.valores.map((valor, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">
                    {valor.split(':')[0]}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {valor.split(':')[1]?.trim()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestra{" "}
          <span className="gradient-hero bg-clip-text text-transparent">
            Historia
          </span>
        </h2>
        
        <div className="space-y-8">
          {empresaData.empresa.historia.map((hito, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                  {hito.año.slice(-2)}
                </div>
                {index < empresaData.empresa.historia.length - 1 && (
                  <div className="w-px h-16 bg-border mt-4"></div>
                )}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="flex items-center space-x-3 mb-2">
                  <Badge variant="outline">{hito.año}</Badge>
                  <h3 className="text-lg font-semibold">{hito.evento}</h3>
                </div>
                <p className="text-muted-foreground">{hito.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestro{" "}
          <span className="gradient-hero bg-clip-text text-transparent">
            Equipo
          </span>
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {empresaData.empresa.equipo.map((miembro, index) => (
            <Card key={index} className="text-center group hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <CardTitle className="text-lg">{miembro.nombre}</CardTitle>
                <Badge variant="secondary">{miembro.cargo}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{miembro.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 p-12 rounded-2xl gradient-hero text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Números que nos respaldan</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <div className="text-4xl font-bold">8+</div>
            <div className="text-white/80">Años de experiencia</div>
          </div>
          <div>
            <div className="text-4xl font-bold">200+</div>
            <div className="text-white/80">Empresas atendidas</div>
          </div>
          <div>
            <div className="text-4xl font-bold">500+</div>
            <div className="text-white/80">Productos disponibles</div>
          </div>
          <div>
            <div className="text-4xl font-bold">98%</div>
            <div className="text-white/80">Satisfacción del cliente</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;