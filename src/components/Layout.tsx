import { useState, ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Home, Facebook, Twitter, Instagram, Mail } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we are already on the homepage, just scroll
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we are on another page, navigate to the homepage with the hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue-soft via-white to-brand-green-soft">
      {/* Header/Navbar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-brand-blue-light/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-blue-dark to-brand-green-vivid rounded-lg"></div>
              <span className="text-xl font-heading font-bold text-brand-blue-dark">Faro del Río</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("inicio")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Inicio</button>
              <button onClick={() => scrollToSection("nosotros")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Sobre Nosotros</button>
              <button onClick={() => scrollToSection("amenidades")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Amenidades</button>
              <Link to="/galeria" className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Galería</Link>
              <button onClick={() => scrollToSection("noticias")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Noticias</button>
              <button onClick={() => scrollToSection("documentos")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Documentos</button>
              <button onClick={() => scrollToSection("contacto")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Contacto</button>
            </div>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-brand-blue-dark text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-blue-light to-brand-green-vivid rounded-lg flex items-center justify-center">
                   <Home className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-heading font-bold">Faro del Río</span>
              </div>
              <p className="text-brand-gray-light text-base leading-relaxed">
                Tu hogar ideal en el corazón de Medellín, donde la comodidad y la comunidad se encuentran.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="font-heading font-semibold mb-6 text-lg">Navegación</h3>
              <ul className="space-y-3 text-brand-gray-light">
                <li><button onClick={() => scrollToSection("nosotros")} className="hover:text-brand-green-vivid transition-colors">Sobre Nosotros</button></li>
                <li><button onClick={() => scrollToSection("amenidades")} className="hover:text-brand-green-vivid transition-colors">Amenidades</button></li>
                <li><Link to="/galeria" className="hover:text-brand-green-vivid transition-colors">Galería</Link></li>
                <li><button onClick={() => scrollToSection("noticias")} className="hover:text-brand-green-vivid transition-colors">Noticias</button></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="font-heading font-semibold mb-6 text-lg">Documentos</h3>
              <ul className="space-y-3 text-brand-gray-light">
                <li><button onClick={() => scrollToSection("documentos")} className="hover:text-brand-green-vivid transition-colors">Manual de Convivencia</button></li>
                <li><button onClick={() => scrollToSection("documentos")} className="hover:text-brand-green-vivid transition-colors">Reglamento P.H.</button></li>
                <li><button onClick={() => scrollToSection("documentos")} className="hover:text-brand-green-vivid transition-colors">Protocolos de Seguridad</button></li>
                <li><button onClick={() => scrollToSection("documentos")} className="hover:text-brand-green-vivid transition-colors">Actas de Asamblea</button></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
                <h3 className="font-heading font-semibold mb-6 text-lg">Mantente Conectado</h3>
                <p className="text-brand-gray-light mb-4">Síguenos en nuestras redes sociales o contáctanos.</p>
                <div className="flex space-x-4 mb-4">
                    <a href="#" className="text-brand-gray-light hover:text-brand-green-vivid transition-colors"><Facebook className="h-6 w-6" /></a>
                    <a href="#" className="text-brand-gray-light hover:text-brand-green-vivid transition-colors"><Twitter className="h-6 w-6" /></a>
                    <a href="#" className="text-brand-gray-light hover:text-brand-green-vivid transition-colors"><Instagram className="h-6 w-6" /></a>
                </div>
                <div className="flex items-center text-brand-gray-light">
                  <Mail className="h-5 w-5 mr-3" />
                  <a href="mailto:conjuntofarodelrioph@hotmail.com" className="hover:text-brand-green-vivid transition-colors">
                    conjuntofarodelrioph@hotmail.com
                  </a>
                </div>
            </div>
          </div>
          
          <Separator className="my-10 bg-brand-blue-light/20" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-brand-gray-light text-sm mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} Conjunto Residencial Faro del Río. Todos los derechos reservados.
            </p>
            <p className="text-brand-gray-light text-sm">
              Diseñado con ❤️ en Medellín
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
