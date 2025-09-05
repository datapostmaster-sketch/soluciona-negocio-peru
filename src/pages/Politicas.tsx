import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import empresaData from "@/data/empresa.json";

const Politicas = () => {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Políticas de{" "}
            <span className="gradient-hero bg-clip-text text-transparent">
              Privacidad
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Información sobre el tratamiento de datos personales y términos de uso
          </p>
          <p className="text-sm text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-PE')}
          </p>
        </div>

        {/* Privacy Policy */}
        <Card>
          <CardHeader>
            <CardTitle>Política de Privacidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3">1. Información que recopilamos</h3>
              <div className="text-muted-foreground space-y-2">
                <p>
                  En {empresaData.empresa.razonSocial} recopilamos la siguiente información:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Datos de identificación (nombre, apellidos, DNI/RUC)</li>
                  <li>Información de contacto (email, teléfono, dirección)</li>
                  <li>Información comercial (empresa, cargo, requerimientos)</li>
                  <li>Datos de navegación (cookies, IP, dispositivo)</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">2. Finalidad del tratamiento</h3>
              <div className="text-muted-foreground space-y-2">
                <p>Utilizamos sus datos personales para:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Procesar y responder solicitudes de cotización</li>
                  <li>Brindar soporte técnico y atención al cliente</li>
                  <li>Enviar información comercial y promociones</li>
                  <li>Cumplir obligaciones legales y contractuales</li>
                  <li>Mejorar nuestros productos y servicios</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">3. Base legal</h3>
              <p className="text-muted-foreground">
                El tratamiento de sus datos se basa en su consentimiento expreso, 
                el cumplimiento de obligaciones contractuales y nuestro interés 
                legítimo en brindar un servicio de calidad.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">4. Compartir información</h3>
              <p className="text-muted-foreground">
                No compartimos sus datos personales con terceros, excepto cuando 
                sea necesario para cumplir con obligaciones legales o prestar 
                nuestros servicios (proveedores de logística, procesadores de pago).
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">5. Seguridad</h3>
              <p className="text-muted-foreground">
                Implementamos medidas técnicas y organizativas apropiadas para 
                proteger sus datos contra acceso no autorizado, alteración, 
                divulgación o destrucción.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">6. Sus derechos</h3>
              <div className="text-muted-foreground space-y-2">
                <p>Usted tiene derecho a:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Suprimir sus datos</li>
                  <li>Limitar el tratamiento</li>
                  <li>Portabilidad de datos</li>
                  <li>Oponerse al tratamiento</li>
                </ul>
                <p className="mt-3">
                  Para ejercer estos derechos, contáctenos en {empresaData.empresa.email}
                </p>
              </div>
            </section>
          </CardContent>
        </Card>

        <Separator />

        {/* Terms and Conditions */}
        <Card>
          <CardHeader>
            <CardTitle>Términos y Condiciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3">1. Aceptación de términos</h3>
              <p className="text-muted-foreground">
                Al utilizar nuestros servicios, usted acepta estos términos y 
                condiciones en su totalidad. Si no está de acuerdo, no utilice 
                nuestros servicios.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">2. Servicios</h3>
              <p className="text-muted-foreground">
                Ofrecemos servicios de venta y distribución de suministros 
                empresariales. Nos reservamos el derecho de modificar o 
                discontinuar servicios sin previo aviso.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">3. Precios y pagos</h3>
              <div className="text-muted-foreground space-y-2">
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Los precios están sujetos a cambio sin previo aviso</li>
                  <li>Las cotizaciones tienen validez de 30 días</li>
                  <li>Los pagos se realizan según condiciones acordadas</li>
                  <li>Precios no incluyen IGV (se añade según ley)</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">4. Entregas</h3>
              <p className="text-muted-foreground">
                Los plazos de entrega son estimados y pueden variar según 
                disponibilidad de productos y ubicación de entrega. No nos 
                hacemos responsables por retrasos causados por terceros.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">5. Garantías</h3>
              <p className="text-muted-foreground">
                Ofrecemos garantía según las especificaciones del fabricante. 
                Los reclamos deben presentarse dentro de los 30 días posteriores 
                a la entrega.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">6. Limitación de responsabilidad</h3>
              <p className="text-muted-foreground">
                Nuestra responsabilidad se limita al valor de los productos 
                vendidos. No seremos responsables por daños indirectos, 
                incidentales o consecuenciales.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">7. Ley aplicable</h3>
              <p className="text-muted-foreground">
                Estos términos se rigen por las leyes de la República del Perú. 
                Cualquier disputa será resuelta en los tribunales de Lima.
              </p>
            </section>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong>Razón Social:</strong> {empresaData.empresa.razonSocial}
              </p>
              <p>
                <strong>RUC:</strong> {empresaData.empresa.ruc}
              </p>
              <p>
                <strong>Dirección:</strong> {empresaData.empresa.direccion}
              </p>
              <p>
                <strong>Email:</strong> {empresaData.empresa.email}
              </p>
              <p>
                <strong>Teléfono:</strong> {empresaData.empresa.telefono}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Politicas;