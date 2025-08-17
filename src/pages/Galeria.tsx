import React from 'react';

const Galeria = () => {
  const imagenes = [
    {
      url: "/galeria/exterior/exterior1.png",
      titulo: "Exterior Torre 1"
    },
    {
      url: "/galeria/exterior/exterior2.png",
      titulo: "Exterior Torre 2"
    },
    {
      url: "/placeholder.svg",
      titulo: "Salón Social"
    },
    {
      url: "/galeria/pasillos/pasillos1.png",
      titulo: "Pasillos"
    },
    {
      url: "/placeholder.svg",
      titulo: "Interiores Torre 1"
    },
    {
      url: "/placeholder.svg",
      titulo: "Interiores Torre 2"
    },
    {
      url: "/placeholder.svg",
      titulo: "Parqueadero"
    },
    {
      url: "/placeholder.svg",
      titulo: "Zona Comun"
    },
    {
      url: "/placeholder.svg",
      titulo: "Portería"
    },
    {
      url: "/placeholder.svg",
      titulo: "Entrada Principal"
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