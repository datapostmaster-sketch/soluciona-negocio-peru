import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import empresaData from "@/data/empresa.json";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  nombre: string;
  email: string;
  mensaje: string;
}

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    nombre: "",
    email: "",
    mensaje: ""
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = "Nombre requerido";
    if (!formData.email.trim()) newErrors.email = "Email requerido";
    if (!formData.mensaje.trim()) newErrors.mensaje = "Mensaje requerido";
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Mensaje enviado:", formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos pronto a tu consulta.",
    });
    
    // Limpiar formulario
    setFormData({ nombre: "", email: "", mensaje: "" });
    setIsSubmitting(false);
  };

  const updateFormData = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          <span className="gradient-hero bg-clip-text text-transparent">
            Contáctanos
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros canales
          o llena el formulario y te responderemos pronto.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Dirección</h3>
                  <p className="text-muted-foreground">{empresaData.empresa.direccion}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">{empresaData.empresa.telefono}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="h-5 w-5 text-secondary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">{empresaData.empresa.whatsapp}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">{empresaData.empresa.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Horarios de atención</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {empresaData.empresa.horarios}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Info */}
          <Card>
            <CardHeader>
              <CardTitle>Datos de la Empresa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Razón Social:</span>
                <span className="font-medium">{empresaData.empresa.razonSocial}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">RUC:</span>
                <span className="font-medium">{empresaData.empresa.ruc}</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Button variant="cta" size="lg" className="w-full" asChild>
              <a 
                href={`https://wa.me/${empresaData.empresa.whatsapp.replace(/\s/g, '')}?text=Hola,%20necesito%20información`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Escribir por WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full" asChild>
              <a href={`mailto:${empresaData.empresa.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Envíanos un mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nombre">Nombre completo *</Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => updateFormData("nombre", e.target.value)}
                  className={errors.nombre ? "border-destructive" : ""}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && (
                  <p className="text-sm text-destructive mt-1">{errors.nombre}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="mensaje">Mensaje *</Label>
                <Textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => updateFormData("mensaje", e.target.value)}
                  className={errors.mensaje ? "border-destructive" : ""}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  rows={5}
                />
                {errors.mensaje && (
                  <p className="text-sm text-destructive mt-1">{errors.mensaje}</p>
                )}
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Map Placeholder */}
      <div className="mt-16">
        <Card>
          <CardContent className="p-0">
            <div className="aspect-[16/9] bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">Ubicación en Google Maps</p>
                <p className="text-sm text-muted-foreground">{empresaData.empresa.direccion}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacto;