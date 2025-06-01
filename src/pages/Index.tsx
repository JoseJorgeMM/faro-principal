
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue-soft via-white to-brand-green-soft">
      {/* Header/Navbar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-brand-blue-light/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-blue-dark to-brand-green-dark rounded-lg"></div>
              <span className="text-xl font-heading font-bold text-brand-blue-dark">EmpresaPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="text-brand-gray-dark hover:text-brand-blue-dark font-medium transition-colors">Servicios</a>
              <a href="#nosotros" className="text-brand-gray-dark hover:text-brand-blue-dark font-medium transition-colors">Nosotros</a>
              <a href="#contacto" className="text-brand-gray-dark hover:text-brand-blue-dark font-medium transition-colors">Contacto</a>
              <Button className="bg-brand-blue-dark hover:bg-brand-blue-light text-white font-medium">
                Comenzar
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-brand-green-light text-brand-green-dark bg-brand-green-soft">
              Innovación Empresarial
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-blue-dark mb-6 leading-tight">
              Transformamos tu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light to-brand-green-light"> Visión</span>
              <br />en Realidad Digital
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed mb-8 max-w-2xl mx-auto">
              Soluciones tecnológicas avanzadas para empresas que buscan liderar su industria con innovación y excelencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-blue-dark hover:bg-brand-blue-light text-white font-semibold">
                Explorar Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand-green-light text-brand-green-dark hover:bg-brand-green-soft font-semibold">
                Ver Casos de Éxito
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
              <div className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-2">500+</div>
              <div className="text-brand-gray font-medium">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-brand-green-dark mb-2">98%</div>
              <div className="text-brand-gray font-medium">Satisfacción Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-2">150+</div>
              <div className="text-brand-gray font-medium">Empresas Confiaron</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-brand-green-dark mb-2">24/7</div>
              <div className="text-brand-gray font-medium">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-4">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Ofrecemos soluciones integrales adaptadas a las necesidades específicas de tu empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-brand-blue-light/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-dark to-brand-blue-light rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark font-heading">Consultoría Estratégica</CardTitle>
                <CardDescription className="text-brand-gray">
                  Análisis profundo y estrategias personalizadas para optimizar procesos empresariales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={95} className="mb-4" />
                <div className="flex items-center text-sm text-brand-gray">
                  <CheckCircle className="h-4 w-4 text-brand-green-light mr-2" />
                  Implementación garantizada
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green-light/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green-dark to-brand-green-light rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark font-heading">Desarrollo Tecnológico</CardTitle>
                <CardDescription className="text-brand-gray">
                  Soluciones de software innovadoras y plataformas digitales de vanguardia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={88} className="mb-4" />
                <div className="flex items-center text-sm text-brand-gray">
                  <CheckCircle className="h-4 w-4 text-brand-green-light mr-2" />
                  Tecnología de última generación
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-blue-light/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-light to-brand-green-light rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark font-heading">Análisis de Datos</CardTitle>
                <CardDescription className="text-brand-gray">
                  Inteligencia empresarial y análisis predictivo para toma de decisiones estratégicas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={92} className="mb-4" />
                <div className="flex items-center text-sm text-brand-gray">
                  <CheckCircle className="h-4 w-4 text-brand-green-light mr-2" />
                  Insights accionables
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gradient-to-r from-brand-blue-soft to-brand-green-soft">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6 border-brand-blue-light text-brand-blue-dark bg-white/50">
                Nuestra Historia
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-6">
                Más de una Década de Excelencia Empresarial
              </h2>
              <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                Fundada con la visión de transformar el panorama empresarial, hemos construido una reputación sólida 
                basada en la innovación, la calidad y el compromiso con nuestros clientes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-brand-green-light mr-3" />
                  <span className="text-brand-gray">Certificaciones internacionales de calidad</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-brand-green-light mr-3" />
                  <span className="text-brand-gray">Equipo de expertos altamente calificados</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-brand-green-light mr-3" />
                  <span className="text-brand-gray">Crecimiento sostenido año tras año</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-heading font-bold text-brand-blue-dark mb-4">Nuestros Valores</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Innovación Constante</h4>
                    <p className="text-brand-gray text-sm">Buscamos siempre las mejores soluciones tecnológicas del mercado</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Compromiso Total</h4>
                    <p className="text-brand-gray text-sm">Cada proyecto es una oportunidad de superar expectativas</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Excelencia Operativa</h4>
                    <p className="text-brand-gray text-sm">Procesos optimizados para garantizar los mejores resultados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue-dark to-brand-green-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
            ¿Listo para Transformar tu Empresa?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a las empresas líderes que ya confían en nuestras soluciones para impulsar su crecimiento
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-brand-blue-dark hover:bg-gray-100 font-semibold">
            Comenzar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-blue-light to-brand-green-light rounded-lg"></div>
                <span className="text-xl font-heading font-bold">EmpresaPro</span>
              </div>
              <p className="text-gray-400">
                Transformando visiones empresariales en realidades digitales exitosas.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Consultoría Estratégica</li>
                <li>Desarrollo Tecnológico</li>
                <li>Análisis de Datos</li>
                <li>Soporte Técnico</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Acerca de Nosotros</li>
                <li>Equipo</li>
                <li>Carreras</li>
                <li>Noticias</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contacto@empresapro.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Síguenos en redes</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 EmpresaPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
