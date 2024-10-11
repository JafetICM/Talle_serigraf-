import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/com-pusa.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white py-4 px-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold">COM-PUSA</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => navigate('/iniciar-sesion')}
                className="hover:text-yellow-300 cursor-pointer"
              >
                Iniciar sesión
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/acerca-de')}
                className="hover:text-yellow-300 cursor-pointer"
              >
                Acerca de nosotros
              </button>
            </li>
            
            <li>
              <button
                onClick={() => navigate('/contacto')}
                className="hover:text-yellow-300 cursor-pointer"
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex justify-between items-center bg-white-600 px-20 py-20">
        {/* Text Section */}
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Bienvenido a <span className="text-blue-600">compusa</span>
          </h2>
          <p className="text-lg mb-8">
            La página de serigrafía donde podrás pedir tus trabajos y los tendremos lo más rápido posible.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/comienza-aqui')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg"
            >
              Comienza aquí
            </button>
            <button
              onClick={() => navigate('/registro')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg"
            >
              Regístrate
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/3">
          <img src={logo} alt="Com-Pusa" className="w-full h-auto" />
        </div>
      </main>
    </div>
  );
};

export default Home;
