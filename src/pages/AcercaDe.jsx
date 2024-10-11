import React from 'react';

const AcercaDe = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Acerca de Nosotros</h2>
        <p className="text-lg text-gray-700 mb-6">
          Somos un taller de serigrafía con años de experiencia, dedicados a ofrecer servicios de impresión de alta calidad.
          Nuestro objetivo es brindar soluciones personalizadas para cada uno de nuestros clientes, asegurando siempre
          la mejor calidad en todos nuestros trabajos.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Contamos con un equipo especializado en diseño gráfico y técnicas de serigrafía para garantizar resultados únicos y duraderos.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg">
          Conócenos más
        </button>
      </div>
    </div>
  );
};

export default AcercaDe;
