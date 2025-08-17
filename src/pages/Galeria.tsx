import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Home, Building, Calendar, Dumbbell, Waves, TreePine, Coffee, Car, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const Galeria = () => {
  const navigate = useNavigate();
  const { section } = useParams();
  const [activeSection, setActiveSection] = useState(section || "general");

  useEffect(() => {
    setActiveSection(section || "general");
  }, [section]);

  const sections = [
    {
      id: "exterior",
      title: "Exterior",
      folder: "exterior torre 1",
      thumb: "/galeria/exterior torre 1/exterior1.png",
      description: "Vistas exteriores del conjunto residencial"
    },
    {
      id: "salon-social",
      title: "Salón Social",
      folder: "salon social",
      thumb: "/galeria/salon social/salon-social1.png",
      description: "Espacios para eventos y reuniones"
    },
    {
      id: "pasillos",
      title: "Pasillos",
      folder: "pasillos",
      thumb: "/galeria/pasillos/pasillos1.png",
      description: "Pasillos y áreas comunes"
    }
  ];

  const getCurrentSection = () => {
    return sections.find(s => s.id === activeSection) || sections[0];
  };

  const getImagesForSection = (folder: string) => {
    // Mapeo de carpetas a imágenes disponibles
    const imageMap: { [key: string]: string[] } = {
      "exterior torre 1": [
        "/galeria/exterior torre 1/exterior1.png",
        "/galeria/exterior torre 1/exterior2.png"
      ],
      "pasillos": [
        "/galeria/pasillos/pasillos1.png"
      ],
      "salon social": [
        // Placeholder para cuando se agreguen imágenes
        "/placeholder.svg"
      ]
    };

    return imageMap[folder] || [];
  };

  const currentSection = getCurrentSection();
  const images = getImagesForSection(currentSection.folder);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue-soft via-white to-brand-green-soft">
      {/* Header/Navbar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-brand-blue-light/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-blue-dark to-brand-green-vivid rounded-lg"></div>
              <span className="text-xl font-heading font-bold text-brand-blue-dark">Faro del Río</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Inicio</Link>
              <Link to="/#nosotros" className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Sobre Nosotros</Link>
              <Link to="/#amenidades" className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Amenidades</Link>
              <Link to="/galeria" className="text-brand-green-vivid font-medium">Galería</Link>
              <Link to="/#noticias" className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Noticias</Link>
              <Link to="/#documentos" className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Documentos</Link>
              <Link to="/#contacto" className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Contacto</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-brand-blue-light/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-brand-gray hover:text-brand-green-vivid transition-colors">Inicio</Link>
            <span className="text-brand-gray">/</span>
            <Link to="/galeria" className="text-brand-gray hover:text-brand-green-vivid transition-colors">Galería</Link>
            {activeSection !== "general" && (
              <>
                <span className="text-brand-gray">/</span>
                <span className="text-brand-green-vivid font-medium">{currentSection.title}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-4">
              Galería de Fotos
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Explora nuestras categorías y descubre cada espacio del conjunto residencial
            </p>
          </div>

          {/* Category Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => navigate(`/galeria/${section.id}`)}
                className={`group text-left rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all hover:-translate-y-0.5 ${
                  activeSection === section.id ? 'ring-2 ring-brand-green-vivid' : ''
                }`}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={section.thumb}
                    alt={section.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-heading font-semibold text-lg">{section.title}</h3>
                    <p className="text-sm opacity-90">{section.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Specific Section Content */}
          {activeSection !== "general" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-brand-blue-dark">
                    {currentSection.title}
                  </h2>
                  <p className="text-brand-gray mt-2">{currentSection.description}</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/galeria')}
                  className="border-brand-green-vivid text-brand-green-vivid hover:bg-brand-green-soft"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a Galería
                </Button>
              </div>

              {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((src, idx) => (
                    <div
                      key={src}
                      className="relative overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition-shadow"
                      title={`${currentSection.title} ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${currentSection.title} ${idx + 1}`}
                        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-brand-gray text-lg">
                    No hay imágenes disponibles para esta sección.
                  </div>
                </div>
              )}
            </div>
          )}

          {/* General Gallery View */}
          {activeSection === "general" && (
            <div className="text-center py-12">
              <div className="text-brand-gray text-lg">
                Selecciona una categoría para ver las imágenes específicas.
              </div>
            </div>
          )}
        </div>
      </section>

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
                <li><Link to="/#nosotros" className="hover:text-brand-green-vivid transition-colors">Sobre Nosotros</Link></li>
                <li><Link to="/#amenidades" className="hover:text-brand-green-vivid transition-colors">Amenidades</Link></li>
                <li><Link to="/galeria" className="hover:text-brand-green-vivid transition-colors">Galería</Link></li>
                <li><Link to="/#noticias" className="hover:text-brand-green-vivid transition-colors">Noticias</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="font-heading font-semibold mb-6 text-lg">Documentos</h3>
              <ul className="space-y-3 text-brand-gray-light">
                <li><Link to="/#documentos" className="hover:text-brand-green-vivid transition-colors">Manual de Convivencia</Link></li>
                <li><Link to="/#documentos" className="hover:text-brand-green-vivid transition-colors">Reglamento P.H.</Link></li>
                <li><Link to="/#documentos" className="hover:text-brand-green-vivid transition-colors">Protocolos de Seguridad</Link></li>
                <li><Link to="/#documentos" className="hover:text-brand-green-vivid transition-colors">Actas de Asamblea</Link></li>
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

export default Galeria; 