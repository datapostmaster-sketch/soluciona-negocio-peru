import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CalendarDays, User, Clock, Share2 } from "lucide-react";

// Mock data - En una implementación real vendría de una API o CMS
const blogPost = {
  slug: "mejores-practicas-gestion-inventarios",
  title: "Las mejores prácticas para la gestión de inventarios empresariales",
  excerpt: "Descubre cómo optimizar la gestión de inventarios en tu empresa para reducir costos y mejorar la eficiencia operativa.",
  content: `
    La gestión eficiente de inventarios es fundamental para el éxito de cualquier empresa. Un sistema bien implementado puede reducir costos operativos hasta en un 25% y mejorar significativamente la satisfacción del cliente.

    ## ¿Por qué es importante la gestión de inventarios?

    La gestión adecuada de inventarios permite:
    - Reducir costos de almacenamiento
    - Evitar desabastecimientos
    - Optimizar el flujo de caja
    - Mejorar la satisfacción del cliente

    ## Principales desafíos

    Las empresas enfrentan varios desafíos al gestionar sus inventarios:

    ### 1. Falta de visibilidad
    Muchas empresas no tienen una visión clara de qué productos tienen en stock, dónde están ubicados y cuándo necesitan reabastecerse.

    ### 2. Demanda impredecible
    Los cambios en la demanda del mercado pueden hacer que las previsiones sean inexactas, resultando en exceso o falta de inventario.

    ### 3. Procesos manuales
    Los sistemas manuales son propensos a errores y consumen mucho tiempo del personal.

    ## Mejores prácticas recomendadas

    ### Implementa un sistema ABC
    Clasifica tus productos según su importancia:
    - **Clase A**: 20% de productos que representan el 80% del valor
    - **Clase B**: 30% de productos con importancia media
    - **Clase C**: 50% de productos de menor valor

    ### Utiliza tecnología de código de barras
    Los sistemas de código de barras reducen errores humanos y agilizan los procesos de entrada y salida de mercancía.

    ### Establece puntos de reorden
    Define niveles mínimos de stock para cada producto y configura alertas automáticas.

    ### Realiza auditorías regulares
    Programa conteos físicos periódicos para verificar la precisión de tus registros.

    ## Beneficios de una buena gestión

    Una gestión de inventarios optimizada genera:
    - Reducción de costos de almacenamiento (15-25%)
    - Mejora en la rotación de inventario (20-30%)
    - Reducción de productos obsoletos (10-15%)
    - Mayor satisfacción del cliente (95%+ de disponibilidad)

    ## Conclusión

    La gestión de inventarios es un proceso continuo que requiere atención constante y mejora continua. Implementar estas prácticas te ayudará a optimizar tus operaciones y mejorar la rentabilidad de tu empresa.

    ¿Necesitas ayuda para implementar un sistema de gestión de inventarios? Contacta con nuestros especialistas para una asesoría personalizada.
  `,
  author: "Carlos Mendoza",
  date: "2024-03-15",
  category: "Gestión",
  readTime: "5 min",
  tags: ["inventarios", "gestión", "optimización", "costos"]
};

const relatedPosts = [
  {
    slug: "tecnologia-codigo-barras-inventarios",
    title: "Implementando tecnología de código de barras en inventarios",
    category: "Tecnología"
  },
  {
    slug: "reducir-costos-suministros-oficina",
    title: "5 formas efectivas de reducir costos en suministros de oficina",
    category: "Ahorro"
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // En una implementación real, aquí buscarías el post por slug
  if (slug !== blogPost.slug) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <Button asChild>
            <Link to="/blog">Volver al Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Inicio</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Artículo</span>
        </nav>

        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Blog
          </Link>
        </Button>

        {/* Article Header */}
        <article className="space-y-8">
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{blogPost.category}</Badge>
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {blogPost.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {blogPost.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(blogPost.date).toLocaleDateString('es-PE')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime} de lectura</span>
                </div>
              </div>

              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartir
              </Button>
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div className="aspect-[16/9] bg-muted/50 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="text-6xl">📊</div>
              <p className="text-muted-foreground">Imagen principal del artículo</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="space-y-6 text-foreground"
              dangerouslySetInnerHTML={{ 
                __html: blogPost.content
                  .replace(/## (.*)/g, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
                  .replace(/### (.*)/g, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
                  .replace(/- (.*)/g, '<li class="ml-4">$1</li>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .split('\n')
                  .map(line => line.trim())
                  .filter(line => line)
                  .map(line => {
                    if (line.startsWith('<h') || line.startsWith('<li')) {
                      return line;
                    }
                    return `<p class="text-muted-foreground leading-relaxed">${line}</p>`;
                  })
                  .join('')
              }}
            />
          </div>

          {/* CTA Section */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                ¿Necesitas ayuda con la gestión de inventarios?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nuestros especialistas pueden ayudarte a implementar las mejores 
                prácticas y encontrar las herramientas adecuadas para tu empresa.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button variant="cta" asChild>
                  <Link to="/cotizacion">Solicitar Asesoría</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contacto">Contactar Especialista</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedPosts.map((post) => (
                <Card key={post.slug} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {post.category}
                    </Badge>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogPost;