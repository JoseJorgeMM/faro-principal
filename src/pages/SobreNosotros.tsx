import React from 'react';

const SobreNosotros = () => {
  return (
    <div className="min-h-screen bg-brand-gray-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-brand-green-vivid mb-8 text-center">
          Sobre Nosotros
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-brand-blue-dark mb-4">
                Nuestra Historia
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Conjunto Residencial Faro es un proyecto que nació con la visión de crear un espacio 
                donde las familias puedan disfrutar de una vida plena y segura. Desde nuestra 
                inauguración en 2015, nos hemos comprometido a mantener los más altos estándares 
                de calidad y servicio para nuestros residentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-brand-blue-dark mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar un entorno residencial excepcional que promueva la calidad de vida, 
                la seguridad y el bienestar de nuestros residentes, manteniendo siempre los más 
                altos estándares de mantenimiento y servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-brand-blue-dark mb-4">
                Nuestra Visión
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ser reconocidos como el conjunto residencial líder en la región, destacando por 
                nuestra excelencia en el servicio, la calidad de vida que ofrecemos y nuestro 
                compromiso con la sostenibilidad y el bienestar de la comunidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-brand-blue-dark mb-4">
                Valores
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Excelencia en el servicio</li>
                <li>Respeto y convivencia</li>
                <li>Seguridad y tranquilidad</li>
                <li>Sostenibilidad ambiental</li>
                <li>Innovación constante</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros; 