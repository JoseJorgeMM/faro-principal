import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle, Star, MapPin, Phone, Mail, Download, FileText, Shield, Home, Building, Calendar, Dumbbell, Waves, TreePine, Coffee, Car } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <button onClick={() => scrollToSection("inicio")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Inicio</button>
              <button onClick={() => scrollToSection("nosotros")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Sobre Nosotros</button>
              <button onClick={() => scrollToSection("amenidades")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Amenidades</button>
              <button onClick={() => scrollToSection("galeria")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Galería</button>
              <button onClick={() => scrollToSection("noticias")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Noticias</button>
              <button onClick={() => scrollToSection("documentos")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Documentos</button>
              <button onClick={() => scrollToSection("contacto")} className="text-brand-gray-dark hover:text-brand-green-vivid font-medium transition-colors">Contacto</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/img/hero-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-6 border-white text-white bg-white/20">
              Hogar de Excelencia
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Bienvenido a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light to-brand-green-vivid"> Faro del Río</span>
              <br />Tu Nuevo Hogar en Medellín
            </h1>
            <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Un conjunto residencial moderno que combina comodidad, seguridad y un estilo de vida excepcional en el corazón de la ciudad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("amenidades")} className="bg-brand-green-vivid hover:bg-brand-green-dark text-white font-semibold">
                Explorar Amenidades
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("galeria")} className="border-white text-white hover:bg-white/20 font-semibold">
                Ver Galería
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-brand-green-vivid mb-2">120</div>
              <div className="text-brand-gray font-medium">Apartamentos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-2">15</div>
              <div className="text-brand-gray font-medium">Amenidades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-brand-green-vivid mb-2">98%</div>
              <div className="text-brand-gray font-medium">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-2">24/7</div>
              <div className="text-brand-gray font-medium">Seguridad</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gradient-to-r from-brand-green-soft to-brand-blue-soft">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6 border-brand-green-vivid text-brand-green-dark bg-white/50">
                Nuestra Historia
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-6">
                Más que un Hogar, una Comunidad
              </h2>
              <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                Faro del Río nació con la visión de crear un espacio donde las familias puedan crecer y prosperar. 
                Ubicado estratégicamente en Medellín, nuestro conjunto residencial ofrece la perfecta combinación 
                entre tranquilidad y conectividad urbana.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-brand-green-vivid mr-3" />
                  <span className="text-brand-gray">Construcción con estándares de alta calidad</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-brand-green-vivid mr-3" />
                  <span className="text-brand-gray">Diseño arquitectónico moderno y funcional</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-brand-green-vivid mr-3" />
                  <span className="text-brand-gray">Valorización constante de la inversión</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-heading font-bold text-brand-blue-dark mb-4">Nuestros Valores</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-green-vivid mb-2">Comunidad</h4>
                    <p className="text-brand-gray text-sm">Fomentamos la convivencia armoniosa entre nuestros residentes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-vivid mb-2">Calidad</h4>
                    <p className="text-brand-gray text-sm">Mantenemos los más altos estándares en todos nuestros servicios</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-vivid mb-2">Sostenibilidad</h4>
                    <p className="text-brand-gray text-sm">Comprometidos con el cuidado del medio ambiente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenidades Section */}
      <section id="amenidades" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-4">
              Amenidades de Primera Clase
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Disfruta de espacios diseñados para mejorar tu calidad de vida y la de tu familia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-brand-green-vivid/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-dark to-brand-green-vivid rounded-lg flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark font-heading">Piscina</CardTitle>
                <CardDescription className="text-brand-gray">
                  Piscina climatizada con área para adultos y niños, perfecta para relajarse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={100} className="mb-4" />
                <div className="flex items-center text-sm text-brand-gray">
                  <CheckCircle className="h-4 w-4 text-brand-green-vivid mr-2" />
                  Disponible todo el año
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green-vivid/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green-vivid to-brand-green-dark rounded-lg flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark font-heading">Gimnasio</CardTitle>
                <CardDescription className="text-brand-gray">
                  Gimnasio completamente equipado con máquinas cardiovasculares y de fuerza
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={95} className="mb-4" />
                <div className="flex items-center text-sm text-brand-gray">
                  <CheckCircle className="h-4 w-4 text-brand-green-vivid mr-2" />
                  Equipamiento profesional
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green-vivid/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-light to-brand-green-vivid rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark font-heading">Salón Social</CardTitle>
                <CardDescription className="text-brand-gray">
                  Amplio salón para eventos y reuniones con capacidad para 80 personas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={90} className="mb-4" />
                <div className="flex items-center text-sm text-brand-gray">
                  <CheckCircle className="h-4 w-4 text-brand-green-vivid mr-2" />
                  Cocina equipada incluida
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green-vivid/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green-vivid to-brand-blue-dark rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark font-heading">Zonas Verdes</CardTitle>
                <CardDescription className="text-brand-gray">
                  Hermosos jardines y senderos ecológicos para caminar y relajarse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={100} className="mb-4" />
                <div className="flex items-center text-sm text-brand-gray">
                  <CheckCircle className="h-4 w-4 text-brand-green-vivid mr-2" />
                  Mantenimiento diario
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green-vivid/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-light to-brand-green-vivid rounded-lg flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark font-heading">Parqueadero</CardTitle>
                <CardDescription className="text-brand-gray">
                  Parqueadero cubierto con espacios para residentes y visitantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={85} className="mb-4" />
                <div className="flex items-center text-sm text-brand-gray">
                  <CheckCircle className="h-4 w-4 text-brand-green-vivid mr-2" />
                  Vigilancia 24/7
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green-vivid/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green-dark to-brand-blue-dark rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark font-heading">Terraza BBQ</CardTitle>
                <CardDescription className="text-brand-gray">
                  Terraza con asadores y mesas para compartir en familia y amigos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={92} className="mb-4" />
                <div className="flex items-center text-sm text-brand-gray">
                  <CheckCircle className="h-4 w-4 text-brand-green-vivid mr-2" />
                  Reserva fácil online
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gradient-to-r from-brand-blue-soft to-brand-green-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-4">
              Galería de Imágenes
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Descubre los espacios que hacen de Faro del Río un lugar especial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393", title: "Fachada Principal" },
              { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d", title: "Apartamento Modelo" },
              { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f", title: "Sala de Estar" },
              { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", title: "Zona de Piscina" },
              { src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13", title: "Gimnasio" },
              { src: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e", title: "Zonas Verdes" }
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="noticias" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-4">
              Noticias y Eventos
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Mantente informado sobre las novedades de nuestra comunidad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136" 
                  alt="Evento comunidad"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 left-2 bg-brand-green-vivid text-white">Nuevo</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-brand-blue-dark">Jornada de Integración Familiar</CardTitle>
                <CardDescription>
                  El próximo sábado celebraremos nuestra jornada anual de integración con actividades para toda la familia.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-brand-gray mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  15 de Junio, 2024
                </div>
                <Button variant="outline" size="sm" className="border-brand-green-vivid text-brand-green-vivid hover:bg-brand-green-soft">
                  Leer más
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5" 
                  alt="Mantenimiento"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-blue-dark">Mejoras en Zonas Comunes</CardTitle>
                <CardDescription>
                  Hemos completado las mejoras en el salón social y la zona de BBQ para mayor comodidad de los residentes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-brand-gray mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  8 de Junio, 2024
                </div>
                <Button variant="outline" size="sm" className="border-brand-green-vivid text-brand-green-vivid hover:bg-brand-green-soft">
                  Leer más
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
                  alt="Seguridad"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-blue-dark">Nuevo Sistema de Seguridad</CardTitle>
                <CardDescription>
                  Implementamos tecnología de última generación para fortalecer la seguridad del conjunto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-brand-gray mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  1 de Junio, 2024
                </div>
                <Button variant="outline" size="sm" className="border-brand-green-vivid text-brand-green-vivid hover:bg-brand-green-soft">
                  Leer más
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documentos" className="py-20 bg-gradient-to-r from-brand-green-soft to-brand-blue-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-4">
              Documentos Importantes
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Accede a la documentación oficial y normativas del conjunto residencial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-brand-green-vivid/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-dark to-brand-green-vivid rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark">Manual de Convivencia</CardTitle>
                <CardDescription>
                  Normas y reglamentos para una convivencia armoniosa en nuestra comunidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-brand-green-vivid hover:bg-brand-green-dark text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-brand-green-vivid/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green-vivid to-brand-blue-dark rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark">Reglamento de Propiedad Horizontal</CardTitle>
                <CardDescription>
                  Marco legal que rige la administración y organización del conjunto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-brand-green-vivid hover:bg-brand-green-dark text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-brand-green-vivid/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-light to-brand-green-vivid rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark">Protocolos de Seguridad</CardTitle>
                <CardDescription>
                  Procedimientos y medidas de seguridad para la protección de todos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-brand-green-vivid hover:bg-brand-green-dark text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-brand-green-vivid/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green-dark to-brand-blue-dark rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark">Reglamento de Uso de Amenidades</CardTitle>
                <CardDescription>
                  Horarios, normas y procedimientos para el uso de espacios comunes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-brand-green-vivid hover:bg-brand-green-dark text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-brand-green-vivid/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-dark to-brand-green-vivid rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark">Plan de Emergencia</CardTitle>
                <CardDescription>
                  Procedimientos a seguir en caso de emergencias y evacuación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-brand-green-vivid hover:bg-brand-green-dark text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-brand-green-vivid/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green-vivid to-brand-blue-light rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark">Actas de Asamblea</CardTitle>
                <CardDescription>
                  Registros oficiales de las decisiones tomadas en las asambleas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-brand-green-vivid hover:bg-brand-green-dark text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Ver Archivo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Comunícate con nosotros para cualquier consulta
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-blue-dark mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-green-vivid to-brand-blue-dark rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue-dark mb-2">Dirección</h4>
                    <p className="text-brand-gray">Calle 65 No. 56 A 60<br />Medellín, Antioquia, Colombia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-dark to-brand-green-vivid rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue-dark mb-2">Teléfono</h4>
                    <p className="text-brand-gray">(604) 579 80 65</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-green-vivid to-brand-blue-light rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue-dark mb-2">Email</h4>
                    <p className="text-brand-gray">administracion@farodelrio.com</p>
                  </div>
                </div>
                
                <div className="bg-brand-green-soft p-6 rounded-xl">
                  <h4 className="font-semibold text-brand-green-dark mb-2">Horarios de Atención</h4>
                  <p className="text-brand-gray text-sm">Lunes, Miércoles y Viernes<br />8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-brand-blue-dark mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-dark mb-2">Nombre</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-vivid" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-dark mb-2">Teléfono</label>
                    <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-vivid" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-gray-dark mb-2">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-vivid" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-gray-dark mb-2">Mensaje</label>
                  <textarea rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-vivid"></textarea>
                </div>
                <Button className="w-full bg-brand-green-vivid hover:bg-brand-green-dark text-white font-semibold py-3">
                  Enviar Mensaje
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-blue-light to-brand-green-vivid rounded-lg"></div>
                <span className="text-xl font-heading font-bold">Faro del Río</span>
              </div>
              <p className="text-gray-400">
                Tu hogar ideal en el corazón de Medellín, donde la comodidad y la comunidad se encuentran.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection("nosotros")} className="hover:text-brand-green-vivid transition-colors">Sobre Nosotros</button></li>
                <li><button onClick={() => scrollToSection("amenidades")} className="hover:text-brand-green-vivid transition-colors">Amenidades</button></li>
                <li><button onClick={() => scrollToSection("galeria")} className="hover:text-brand-green-vivid transition-colors">Galería</button></li>
                <li><button onClick={() => scrollToSection("noticias")} className="hover:text-brand-green-vivid transition-colors">Noticias</button></li>
                <li><button onClick={() => scrollToSection("documentos")} className="hover:text-brand-green-vivid transition-colors">Documentos</button></li>
                <li><button onClick={() => scrollToSection("contacto")} className="hover:text-brand-green-vivid transition-colors">Contacto</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Documentos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection("documentos")} className="hover:text-brand-green-vivid transition-colors">Manual de Convivencia</button></li>
                <li><button onClick={() => scrollToSection("documentos")} className="hover:text-brand-green-vivid transition-colors">Reglamento P.H.</button></li>
                <li><button onClick={() => scrollToSection("documentos")} className="hover:text-brand-green-vivid transition-colors">Protocolos</button></li>
                <li><button onClick={() => scrollToSection("documentos")} className="hover:text-brand-green-vivid transition-colors">Actas</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Calle 65 No. 56 A 60</li>
                <li>Medellín, Antioquia</li>
                <li>(604) 579 80 65</li>
                <li>administracion@farodelrio.com</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Conjunto Residencial Faro del Río. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
