import React from 'react';

const Noticias = () => {
  const noticias = [
    {
      titulo: "Mantenimiento Programado de Piscina",
      fecha: "15 de Marzo, 2024",
      descripcion: "Se informa a todos los residentes que la piscina estará cerrada del 20 al 25 de marzo para mantenimiento anual.",
      imagen: "https://images.unsplash.com/photo-1560103104-4623c14a373b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Nuevo Sistema de Seguridad",
      fecha: "10 de Marzo, 2024",
      descripcion: "Se ha implementado un nuevo sistema de cámaras de seguridad en las áreas comunes del conjunto.",
      imagen: "https://images.unsplash.com/photo-1555952497-05471c1e7f9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Asamblea General Extraordinaria",
      fecha: "5 de Marzo, 2024",
      descripcion: "Se convoca a todos los propietarios a la asamblea general extraordinaria que se realizará el próximo 20 de marzo.",
      imagen: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gray-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-brand-green-vivid mb-8 text-center">
          Noticias y Avisos
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {noticias.map((noticia, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img 
                    className="h-48 w-full md:w-48 object-cover"
                    src={noticia.imagen}
                    alt={noticia.titulo}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-brand-green-vivid font-semibold">
                    {noticia.fecha}
                  </div>
                  <h2 className="mt-2 text-xl font-heading font-semibold text-brand-blue-dark">
                    {noticia.titulo}
                  </h2>
                  <p className="mt-3 text-gray-700">
                    {noticia.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Noticias; 