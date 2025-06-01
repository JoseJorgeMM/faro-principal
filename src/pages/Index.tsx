
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Trophy, Target, Star } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Inicializar animaciones de scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-down');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-green rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold gradient-text">Faro</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-brand-gray-600 hover:text-brand-blue transition-colors">Inicio</a>
              <a href="#servicios" className="text-brand-gray-600 hover:text-brand-blue transition-colors">Servicios</a>
              <a href="#nosotros" className="text-brand-gray-600 hover:text-brand-blue transition-colors">Nosotros</a>
              <a href="#contacto" className="text-brand-gray-600 hover:text-brand-blue transition-colors">Contacto</a>
            </div>

            <Button className="btn-primary">
              Comenzar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="section-padding bg-gradient-to-br from-brand-blue/5 to-brand-green/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-blue-dark mb-6 text-shadow">
              Iluminamos el camino hacia el 
              <span className="gradient-text"> éxito profesional</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-gray-600 mb-8 leading-relaxed">
              Somos tu guía confiable en el mundo empresarial, ofreciendo soluciones innovadoras 
              y estratégicas para llevar tu negocio al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Descubre más
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="btn-outline text-lg px-8 py-4">
                Ver proyectos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-blue-dark mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales diseñadas para impulsar tu crecimiento empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Consultoría Estratégica",
                description: "Desarrollamos estrategias personalizadas para optimizar tu rendimiento empresarial."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Desarrollo Organizacional",
                description: "Fortalecemos tu equipo y cultura empresarial para alcanzar objetivos ambiciosos."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Transformación Digital",
                description: "Modernizamos tus procesos con tecnología de vanguardia y soluciones innovadoras."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Gestión de Proyectos",
                description: "Ejecutamos proyectos complejos con metodologías ágiles y resultados garantizados."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Innovación Empresarial",
                description: "Impulsamos la creatividad y la innovación para mantener tu ventaja competitiva."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Crecimiento Sostenible",
                description: "Diseñamos estrategias de crecimiento responsable y sustentable a largo plazo."
              }
            ].map((service, index) => (
              <Card key={index} className="card-professional hover-lift animate-fade-in-up animation-delay-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-lg flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-heading text-brand-blue-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="section-padding bg-brand-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-blue-dark mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-lg text-brand-gray-600 mb-6 leading-relaxed">
                Con más de una década de experiencia, Faro se ha consolidado como el socio estratégico 
                de elección para empresas que buscan excelencia y resultados extraordinarios.
              </p>
              <p className="text-lg text-brand-gray-600 mb-8 leading-relaxed">
                Nuestro equipo multidisciplinario combina expertise técnico con visión estratégica, 
                creando soluciones personalizadas que generan impacto real y duradero.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "500+", label: "Proyectos Exitosos" },
                  { number: "98%", label: "Satisfacción Cliente" },
                  { number: "50+", label: "Empresas Transformadas" },
                  { number: "24/7", label: "Soporte Continuo" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-brand-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button className="btn-secondary">
                Conoce nuestro equipo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl shadow-2xl"></div>
                <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Target className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Nuestra Misión</h3>
                    <p className="text-lg opacity-90">Guiar empresas hacia su máximo potencial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-blue-green">
        <div className="container-custom text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 text-shadow-lg">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que han confiado en Faro para alcanzar sus objetivos más ambiciosos
          </p>
          <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-4">
            Contactar ahora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray-900 text-brand-gray-300 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-green rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-heading font-bold text-white">Faro</span>
              </div>
              <p className="text-brand-gray-400 leading-relaxed">
                Iluminamos el camino hacia el éxito empresarial con soluciones innovadoras y estratégicas.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-brand-green transition-colors">Consultoría</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Desarrollo</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Transformación</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Innovación</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-brand-green transition-colors">Nosotros</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Equipo</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Noticias</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-brand-gray-400">
                <li>info@faro.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Business Ave<br />Ciudad, País 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-gray-800 mt-12 pt-8 text-center text-brand-gray-400">
            <p>&copy; 2024 Faro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
