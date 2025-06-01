import React from 'react';

const Galeria = () => {
  const imagenes = [
    {
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titulo: "Fachada Principal"
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titulo: "Área Comunal"
    },
    {
      url: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titulo: "Apartamento Tipo"
    },
    {
      url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titulo: "Cocina"
    },
    {
      url: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titulo: "Sala"
    },
    {
      url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titulo: "Dormitorio"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gray-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-brand-green-vivid mb-8 text-center">
          Galería
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imagenes.map((imagen, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={imagen.url} 
                alt={imagen.titulo}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-heading font-semibold text-brand-blue-dark text-center">
                  {imagen.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galeria; 