import React from 'react';

const ComienzaAqui = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Explora Nuestros Servicios</h2>
        <p className="text-lg text-gray-700 mb-6">
          Bienvenido a nuestro taller de serigrafía. Aquí podrás ver todos los productos y servicios que ofrecemos, desde la impresión en camisetas, tazas, hasta artículos promocionales.
          ¡Explora y elige lo que necesitas!
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Si tienes alguna duda o requieres un servicio especial, no dudes en contactarnos. Estamos aquí para ayudarte a lograr lo que necesitas.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg">
          Ver Productos
        </button>
      </div>
    </div>
  );
};

export default ComienzaAqui;
