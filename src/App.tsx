import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Index from "./pages/Index";
import Productos from "./pages/Productos";
import ProductoCategoria from "./pages/ProductoCategoria";
import ProductoDetalle from "./pages/ProductoDetalle";
import Cotizacion from "./pages/Cotizacion";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Politicas from "./pages/Politicas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/productos/:categoria" element={<ProductoCategoria />} />
              <Route path="/productos/:categoria/:slug" element={<ProductoDetalle />} />
              <Route path="/cotizacion" element={<Cotizacion />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/politicas" element={<Politicas />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
