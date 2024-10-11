import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/com-pusa.png';

const IniciarSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", email, password);
    alert("Sesión iniciada con éxito");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-800">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Logo en el centro */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Com-Pusa" className="w-20 h-20" />
        </div>
        
        {/* Título */}
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
          Iniciar sesión con tu cuenta
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot?</a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          
          {/* Botón de inicio de sesión */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Login now
          </button>
        </form>

        {/* Enlace de registro */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't Have An Account?{' '}
          <span
            onClick={() => navigate('/registro')}
            className="text-blue-600 hover:underline cursor-pointer font-medium"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default IniciarSesion;
