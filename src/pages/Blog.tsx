import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    slug: "mejores-practicas-gestion-inventarios",
    title: "Las mejores prácticas para la gestión de inventarios empresariales",
    excerpt: "Descubre cómo optimizar la gestión de inventarios en tu empresa para reducir costos y mejorar la eficiencia operativa.",
    author: "Carlos Mendoza",
    date: "2024-03-15",
    category: "Gestión",
    readTime: "5 min"
  },
  {
    slug: "tendencias-packaging-2024",
    title: "Tendencias en packaging sustentable para 2024",
    excerpt: "Las últimas tendencias en empaques ecológicos y cómo implementarlas en tu estrategia de producto sin incrementar costos.",
    author: "Ana Rodríguez",
    date: "2024-03-10",
    category: "Packaging",
    readTime: "7 min"
  },
  {
    slug: "optimizacion-compras-corporativas",
    title: "Cómo optimizar las compras corporativas de suministros",
    excerpt: "Estrategias probadas para reducir costos en compras empresariales manteniendo la calidad y confiabilidad de proveedores.",
    author: "Miguel Torres",
    date: "2024-03-05",
    category: "Compras",
    readTime: "6 min"
  },
  {
    slug: "importancia-limpieza-oficinas",
    title: "La importancia de mantener espacios de trabajo limpios y seguros",
    excerpt: "Cómo un protocolo de limpieza adecuado mejora la productividad y reduce el ausentismo laboral en tu empresa.",
    author: "Patricia Vega",
    date: "2024-02-28",
    category: "Higiene",
    readTime: "4 min"
  },
  {
    slug: "tecnologia-codigo-barras-inventarios",
    title: "Implementando tecnología de código de barras en inventarios",
    excerpt: "Guía completa para implementar sistemas de código de barras y mejorar la precisión en el control de inventarios.",
    author: "Carlos Mendoza",
    date: "2024-02-20",
    category: "Tecnología",
    readTime: "8 min"
  },
  {
    slug: "reducir-costos-suministros-oficina",
    title: "5 formas efectivas de reducir costos en suministros de oficina",
    excerpt: "Estrategias prácticas y consejos de expertos para optimizar el presupuesto de suministros sin comprometer la operación.",
    author: "Ana Rodríguez",
    date: "2024-02-15",
    category: "Ahorro",
    readTime: "5 min"
  }
];

const categories = ["Todos", "Gestión", "Packaging", "Compras", "Higiene", "Tecnología", "Ahorro"];

const Blog = () => {
  return (
    <div className="container py-12">
      {/* Hero */}
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Nuestro{" "}
          <span className="gradient-hero bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Consejos, tendencias y mejores prácticas para optimizar la gestión 
          de suministros en tu empresa.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Badge 
            key={category} 
            variant={category === "Todos" ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Featured Post */}
      <Card className="mb-12 overflow-hidden group hover:shadow-lg transition-shadow">
        <div className="md:flex">
          <div className="md:w-1/3">
            <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-4xl">📊</div>
                <p className="text-muted-foreground text-sm">Imagen del artículo</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">Destacado</Badge>
              <Badge variant="outline">{blogPosts[0].category}</Badge>
            </div>
            <Link to={`/blog/${blogPosts[0].slug}`}>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {blogPosts[0].title}
              </h2>
            </Link>
            <p className="text-muted-foreground mb-4 text-lg">
              {blogPosts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString('es-PE')}</span>
                </div>
                <span>{blogPosts[0].readTime} de lectura</span>
              </div>
              <Link 
                to={`/blog/${blogPosts[0].slug}`}
                className="flex items-center text-primary hover:text-primary-dark transition-colors"
              >
                <span className="text-sm font-medium">Leer más</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Card>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-3xl">
                  {post.category === "Packaging" && "📦"}
                  {post.category === "Compras" && "🛒"}
                  {post.category === "Higiene" && "🧼"}
                  {post.category === "Tecnología" && "💻"}
                  {post.category === "Ahorro" && "💰"}
                </div>
                <p className="text-muted-foreground text-xs">Imagen</p>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="outline" className="text-xs">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </Link>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarDays className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString('es-PE')}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="flex items-center text-primary hover:text-primary-dark transition-colors text-sm"
                >
                  <span>Leer</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Mantente actualizado
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Suscríbete a nuestro boletín y recibe los últimos artículos, 
          consejos y novedades del sector directamente en tu email.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-foreground"
          />
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;