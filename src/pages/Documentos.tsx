import React from 'react';

const Documentos = () => {
  const documentos = [
    {
      titulo: "Manual de Convivencia",
      descripcion: "Documento que establece las normas y reglas de convivencia del conjunto residencial.",
      tipo: "PDF",
      tamaño: "2.5 MB",
      fecha: "15 de Enero, 2024"
    },
    {
      titulo: "Reglamento de Propiedad Horizontal",
      descripcion: "Documento legal que regula la administración y funcionamiento del conjunto.",
      tipo: "PDF",
      tamaño: "3.1 MB",
      fecha: "10 de Enero, 2024"
    },
    {
      titulo: "Reglamento de Piscina",
      descripcion: "Normas y reglas para el uso de la piscina y áreas húmedas.",
      tipo: "PDF",
      tamaño: "1.8 MB",
      fecha: "5 de Enero, 2024"
    },
    {
      titulo: "Reglamento de Zonas Comunes",
      descripcion: "Normas para el uso y disfrute de las zonas comunes del conjunto.",
      tipo: "PDF",
      tamaño: "2.2 MB",
      fecha: "1 de Enero, 2024"
    },
    {
      titulo: "Procedimiento de Mantenimiento",
      descripcion: "Guía de procedimientos para solicitar mantenimiento en unidades.",
      tipo: "PDF",
      tamaño: "1.5 MB",
      fecha: "28 de Diciembre, 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gray-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-brand-green-vivid mb-8 text-center">
          Documentos Importantes
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {documentos.map((documento, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-semibold text-brand-blue-dark">
                        {documento.titulo}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {documento.descripcion}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="mr-4">Tipo: {documento.tipo}</span>
                        <span className="mr-4">Tamaño: {documento.tamaño}</span>
                        <span>Actualizado: {documento.fecha}</span>
                      </div>
                    </div>
                    <button className="ml-4 px-4 py-2 bg-brand-green-vivid text-white rounded-md hover:bg-brand-green-dark transition-colors duration-200">
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentos; 