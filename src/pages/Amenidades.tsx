import React from 'react';

const Amenidades = () => {
  const amenidades = [
    {
      titulo: "Piscina",
      descripcion: "Piscina climatizada con área de solárium y jacuzzi",
      imagen: "https://images.unsplash.com/photo-1560103104-4623c14a373b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Gimnasio",
      descripcion: "Gimnasio completamente equipado con equipos de última generación",
      imagen: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Zona BBQ",
      descripcion: "Áreas de parrilla con mesas y asientos para eventos sociales",
      imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Salón Comunal",
      descripcion: "Amplio salón para eventos y reuniones sociales",
      imagen: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Zona Infantil",
      descripcion: "Parque infantil con juegos seguros y área de recreación",
      imagen: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Seguridad 24/7",
      descripcion: "Sistema de seguridad con vigilancia las 24 horas",
      imagen: "https://images.unsplash.com/photo-1555952497-05471c1e7f9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gray-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-brand-green-vivid mb-8 text-center">
          Nuestras Amenidades
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenidades.map((amenidad, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={amenidad.imagen} 
                alt={amenidad.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-brand-blue-dark mb-2">
                  {amenidad.titulo}
                </h3>
                <p className="text-gray-700">
                  {amenidad.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenidades; 