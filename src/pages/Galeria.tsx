import React, { useState } from 'react';

// Helper function to normalize section titles into folder names
const getFolderName = (title: string) => {
  return title
    .toLowerCase()
    .normalize("NFD") // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, ""); // Remove accent marks
};

const Galeria = () => {
  // Structured data for gallery sections
  const secciones = [
    {
      titulo: 'Exterior Torre 1',
      imagenes: [
        { url: '/galeria/exterior/exterior1.png', alt: 'Vista exterior de la Torre 1' },
        { url: '/placeholder.svg', alt: 'Otra vista exterior de la Torre 1' }
      ]
    },
    {
      titulo: 'Exterior Torre 2',
      imagenes: [
        { url: '/galeria/exterior/exterior2.png', alt: 'Vista exterior de la Torre 2' }
      ]
    },
    {
      titulo: 'Salón Social',
      imagenes: [
        { url: `/galeria/${getFolderName('Salón Social')}/salon social1.png`, alt: 'Interior del Salón Social' },
        { url: `/galeria/${getFolderName('Salón Social')}/salon social2.png`, alt: 'Detalle del Salón Social' }
      ]
    },
    {
      titulo: 'Pasillos',
      imagenes: [
        { url: '/galeria/pasillos/pasillos1.png', alt: 'Pasillo principal del edificio' }
      ]
    },
    {
      titulo: 'Interiores Torre 1',
      imagenes: [
        { url: `/galeria/${getFolderName('Interiores Torre 1')}/interiores torre 1-1.png`, alt: 'Apartamento modelo en Torre 1' }
      ]
    },
    {
      titulo: 'Interiores Torre 2',
      imagenes: [
        { url: `/galeria/${getFolderName('Interiores Torre 2')}/interiores torre 2-1.png`, alt: 'Apartaestudio en Torre 2' }
      ]
    },
    {
      titulo: 'Parqueadero',
      imagenes: [
        { url: `/galeria/${getFolderName('Parqueadero')}/parqueadero1.png`, alt: 'Zona de parqueaderos' }
      ]
    },
    {
      titulo: 'Zona Comun',
      imagenes: [
        { url: `/galeria/${getFolderName('Zona Comun')}/zona comun1.png`, alt: 'Vista de la zona común' }
      ]
    },
    {
      titulo: 'Portería',
      imagenes: [
        { url: `/galeria/${getFolderName('Portería')}/porteria1.png`, alt: 'Recepción y portería' }
      ]
    },
    {
      titulo: 'Entrada Principal',
      imagenes: [
        { url: `/galeria/${getFolderName('Entrada Principal')}/entrada principal1.png`, alt: 'Entrada principal del conjunto' }
      ]
    }
  ];

  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (url: string) => {
    setModalImage(url);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className="min-h-screen bg-brand-gray-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-brand-green-vivid mb-12 text-center">
            Galería de Espacios
          </h1>
          
          <div className="space-y-16">
            {secciones.map((seccion, secIndex) => (
              <section key={secIndex} id={getFolderName(seccion.titulo)}>
                <h2 className="text-3xl font-heading font-semibold text-brand-blue-dark mb-8 pb-2 border-b-2 border-brand-green-vivid">
                  {seccion.titulo}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {seccion.imagenes.map((imagen, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                      onClick={() => openModal(imagen.url)}
                    >
                      <img 
                        src={imagen.url} 
                        alt={imagen.alt}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-900 rounded-full p-2 text-xl leading-none z-10"
              aria-label="Cerrar imagen"
            >
              &times;
            </button>
            <img src={modalImage} alt="Vista ampliada" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </>
  );
};

export default Galeria; 