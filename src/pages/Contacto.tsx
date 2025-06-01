import React from 'react';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-brand-gray-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-brand-green-vivid mb-8 text-center">
          Contacto
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-brand-blue-dark mb-4">
                    Información de Contacto
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-brand-green-vivid">Dirección</h3>
                      <p className="text-gray-700">Calle Principal #123</p>
                      <p className="text-gray-700">Ciudad, Estado</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-green-vivid">Teléfono</h3>
                      <p className="text-gray-700">(123) 456-7890</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-green-vivid">Email</h3>
                      <p className="text-gray-700">info@conjuntofaro.com</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-green-vivid">Horario de Atención</h3>
                      <p className="text-gray-700">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-brand-blue-dark mb-4">
                    Envíanos un Mensaje
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green-vivid focus:ring-brand-green-vivid"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green-vivid focus:ring-brand-green-vivid"
                      />
                    </div>
                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green-vivid focus:ring-brand-green-vivid"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-brand-green-vivid text-white rounded-md hover:bg-brand-green-dark transition-colors duration-200"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto; 