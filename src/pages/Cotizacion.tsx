import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import catalogoData from "@/data/catalogo.json";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Paso 1: Datos de contacto
  nombreCompleto: string;
  empresa: string;
  ruc: string;
  email: string;
  telefono: string;
  departamento: string;
  provincia: string;
  distrito: string;
  
  // Paso 2: Requerimiento
  categoria: string;
  producto: string;
  cantidad: string;
  unidad: string;
  usoPrevisto: string;
  presupuesto: string;
  
  // Paso 3: Entrega
  direccion: string;
  modalidad: string;
  plazoDeseado: string;
  
  // Consentimiento
  aceptaPrivacidad: boolean;
}

const departamentos = [
  "Lima", "Arequipa", "La Libertad", "Lambayeque", "Piura", "Junín", 
  "Cusco", "Puno", "Ica", "Ancash", "Huánuco", "Cajamarca", "Loreto",
  "San Martín", "Ucayali", "Amazonas", "Ayacucho", "Apurímac", "Huancavelica",
  "Moquegua", "Pasco", "Tacna", "Tumbes", "Madre de Dios"
];

const Cotizacion = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    empresa: "",
    ruc: "",
    email: "",
    telefono: "",
    departamento: "",
    provincia: "",
    distrito: "",
    categoria: searchParams.get("categoria") || "",
    producto: searchParams.get("producto") || "",
    cantidad: "",
    unidad: "",
    usoPrevisto: "",
    presupuesto: "",
    direccion: "",
    modalidad: "",
    plazoDeseado: "",
    aceptaPrivacidad: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const selectedCategoria = catalogoData.categorias.find(
    cat => cat.id === formData.categoria
  );

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.nombreCompleto) newErrors.nombreCompleto = "Nombre requerido";
      if (!formData.empresa) newErrors.empresa = "Empresa requerida";
      if (!formData.email) newErrors.email = "Email requerido";
      if (!formData.telefono) newErrors.telefono = "Teléfono requerido";
      if (!formData.departamento) newErrors.departamento = "Departamento requerido";
      if (!formData.provincia) newErrors.provincia = "Provincia requerida";
      if (!formData.distrito) newErrors.distrito = "Distrito requerido";
    } else if (step === 2) {
      if (!formData.categoria) newErrors.categoria = "Categoría requerida";
      if (!formData.cantidad) newErrors.cantidad = "Cantidad requerida";
      if (!formData.usoPrevisto) newErrors.usoPrevisto = "Uso previsto requerido";
    } else if (step === 3) {
      if (!formData.direccion) newErrors.direccion = "Dirección requerida";
      if (!formData.modalidad) newErrors.modalidad = "Modalidad requerida";
      if (!formData.plazoDeseado) newErrors.plazoDeseado = "Plazo requerido";
      if (!formData.aceptaPrivacidad) newErrors.aceptaPrivacidad = true as any;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    if (validateStep(3)) {
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Cotización enviada:", formData);
      
      setIsSubmitted(true);
      
      toast({
        title: "¡Cotización enviada!",
        description: "Te contactaremos en menos de 1 día hábil.",
      });
    }
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="container py-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <CheckCircle className="h-16 w-16 text-secondary mx-auto" />
          <h1 className="text-3xl font-bold">¡Gracias por tu solicitud!</h1>
          <p className="text-xl text-muted-foreground">
            Hemos recibido tu cotización y te contactaremos en menos de 1 día hábil
            con una propuesta personalizada.
          </p>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Te enviaremos la cotización a: <strong>{formData.email}</strong>
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="cta" asChild>
                <a 
                  href={`https://wa.me/51987654321?text=Hola,%20acabo%20de%20enviar%20una%20cotización%20para%20${formData.empresa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Nueva Cotización
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Solicitar{" "}
            <span className="gradient-hero bg-clip-text text-transparent">
              Cotización
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Completa los siguientes datos para recibir una cotización personalizada.
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div 
                  className={`w-12 h-px ${
                    step < currentStep ? "bg-primary" : "bg-muted"
                  }`} 
                />
              )}
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Datos de Contacto"}
              {currentStep === 2 && "Requerimiento"}
              {currentStep === 3 && "Entrega y Confirmación"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Paso 1: Datos de contacto */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="nombreCompleto">Nombre completo *</Label>
                    <Input
                      id="nombreCompleto"
                      value={formData.nombreCompleto}
                      onChange={(e) => updateFormData("nombreCompleto", e.target.value)}
                      className={errors.nombreCompleto ? "border-destructive" : ""}
                    />
                    {errors.nombreCompleto && (
                      <p className="text-sm text-destructive">{errors.nombreCompleto}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa *</Label>
                    <Input
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => updateFormData("empresa", e.target.value)}
                      className={errors.empresa ? "border-destructive" : ""}
                    />
                    {errors.empresa && (
                      <p className="text-sm text-destructive">{errors.empresa}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="ruc">RUC (opcional)</Label>
                  <Input
                    id="ruc"
                    value={formData.ruc}
                    onChange={(e) => updateFormData("ruc", e.target.value)}
                    placeholder="20123456789"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="telefono">Teléfono/WhatsApp *</Label>
                    <Input
                      id="telefono"
                      placeholder="+51 987 654 321"
                      value={formData.telefono}
                      onChange={(e) => updateFormData("telefono", e.target.value)}
                      className={errors.telefono ? "border-destructive" : ""}
                    />
                    {errors.telefono && (
                      <p className="text-sm text-destructive">{errors.telefono}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="departamento">Departamento *</Label>
                    <Select 
                      value={formData.departamento} 
                      onValueChange={(value) => updateFormData("departamento", value)}
                    >
                      <SelectTrigger className={errors.departamento ? "border-destructive" : ""}>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        {departamentos.map((dept) => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.departamento && (
                      <p className="text-sm text-destructive">{errors.departamento}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="provincia">Provincia *</Label>
                    <Input
                      id="provincia"
                      value={formData.provincia}
                      onChange={(e) => updateFormData("provincia", e.target.value)}
                      className={errors.provincia ? "border-destructive" : ""}
                    />
                    {errors.provincia && (
                      <p className="text-sm text-destructive">{errors.provincia}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="distrito">Distrito *</Label>
                    <Input
                      id="distrito"
                      value={formData.distrito}
                      onChange={(e) => updateFormData("distrito", e.target.value)}
                      className={errors.distrito ? "border-destructive" : ""}
                    />
                    {errors.distrito && (
                      <p className="text-sm text-destructive">{errors.distrito}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Paso 2: Requerimiento */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="categoria">Categoría *</Label>
                  <Select 
                    value={formData.categoria} 
                    onValueChange={(value) => updateFormData("categoria", value)}
                  >
                    <SelectTrigger className={errors.categoria ? "border-destructive" : ""}>
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {catalogoData.categorias.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>{cat.nombre}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.categoria && (
                    <p className="text-sm text-destructive">{errors.categoria}</p>
                  )}
                </div>

                {selectedCategoria && (
                  <div>
                    <Label htmlFor="producto">Producto (opcional)</Label>
                    <Select 
                      value={formData.producto} 
                      onValueChange={(value) => updateFormData("producto", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar producto específico" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedCategoria.productos.map((prod) => (
                          <SelectItem key={prod.id} value={prod.id}>{prod.nombre}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cantidad">Cantidad *</Label>
                    <Input
                      id="cantidad"
                      type="number"
                      value={formData.cantidad}
                      onChange={(e) => updateFormData("cantidad", e.target.value)}
                      className={errors.cantidad ? "border-destructive" : ""}
                    />
                    {errors.cantidad && (
                      <p className="text-sm text-destructive">{errors.cantidad}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="unidad">Unidad</Label>
                    <Input
                      id="unidad"
                      value={formData.unidad}
                      onChange={(e) => updateFormData("unidad", e.target.value)}
                      placeholder="unidades, cajas, rollos..."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="usoPrevisto">Uso previsto *</Label>
                  <Textarea
                    id="usoPrevisto"
                    value={formData.usoPrevisto}
                    onChange={(e) => updateFormData("usoPrevisto", e.target.value)}
                    placeholder="Describe el uso que le darás al producto..."
                    className={errors.usoPrevisto ? "border-destructive" : ""}
                  />
                  {errors.usoPrevisto && (
                    <p className="text-sm text-destructive">{errors.usoPrevisto}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="presupuesto">Presupuesto aproximado (opcional)</Label>
                  <Input
                    id="presupuesto"
                    value={formData.presupuesto}
                    onChange={(e) => updateFormData("presupuesto", e.target.value)}
                    placeholder="S/ 1,000 - S/ 5,000"
                  />
                </div>
              </div>
            )}

            {/* Paso 3: Entrega */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="direccion">Dirección de entrega *</Label>
                  <Textarea
                    id="direccion"
                    value={formData.direccion}
                    onChange={(e) => updateFormData("direccion", e.target.value)}
                    placeholder="Dirección completa incluyendo referencias..."
                    className={errors.direccion ? "border-destructive" : ""}
                  />
                  {errors.direccion && (
                    <p className="text-sm text-destructive">{errors.direccion}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="modalidad">Modalidad *</Label>
                  <Select 
                    value={formData.modalidad} 
                    onValueChange={(value) => updateFormData("modalidad", value)}
                  >
                    <SelectTrigger className={errors.modalidad ? "border-destructive" : ""}>
                      <SelectValue placeholder="Seleccionar modalidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="envio">Envío a domicilio</SelectItem>
                      <SelectItem value="retiro">Retiro en almacén</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.modalidad && (
                    <p className="text-sm text-destructive">{errors.modalidad}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="plazoDeseado">Plazo deseado *</Label>
                  <Select 
                    value={formData.plazoDeseado} 
                    onValueChange={(value) => updateFormData("plazoDeseado", value)}
                  >
                    <SelectTrigger className={errors.plazoDeseado ? "border-destructive" : ""}>
                      <SelectValue placeholder="Seleccionar plazo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgente">Urgente (24-48h)</SelectItem>
                      <SelectItem value="rapido">Rápido (3-5 días)</SelectItem>
                      <SelectItem value="normal">Normal (1-2 semanas)</SelectItem>
                      <SelectItem value="flexible">Flexible (según disponibilidad)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.plazoDeseado && (
                    <p className="text-sm text-destructive">{errors.plazoDeseado}</p>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacidad"
                    checked={formData.aceptaPrivacidad}
                    onCheckedChange={(checked) => updateFormData("aceptaPrivacidad", !!checked)}
                  />
                  <Label htmlFor="privacidad" className="text-sm">
                    Acepto las políticas de privacidad y el tratamiento de mis datos personales 
                    para fines comerciales. *
                  </Label>
                </div>
                {errors.aceptaPrivacidad && (
                  <p className="text-sm text-destructive">{errors.aceptaPrivacidad}</p>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <Button variant="outline" onClick={handlePrevious}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <Button onClick={handleNext}>
                    Siguiente
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="cta" onClick={handleSubmit}>
                    Enviar Cotización
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cotizacion;