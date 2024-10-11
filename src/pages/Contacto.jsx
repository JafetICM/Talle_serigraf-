import React from 'react';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Contacto</h2>
        <p className="text-lg text-gray-700 mb-6">
          ¿Tienes alguna consulta o necesitas más información? ¡Nos encantaría saber de ti!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Puedes contactarnos a través de los siguientes medios:
        </p>
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-800">Teléfono: <span className="text-gray-600">+52 123 456 7890</span></p>
          <p className="text-lg font-medium text-gray-800">Email: <span className="text-gray-600">info@compusa.com</span></p>
          <p className="text-lg font-medium text-gray-800">Dirección: <span className="text-gray-600">Calle Serigrafía No. 123, Ciudad, País</span></p>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg">
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default Contacto;
