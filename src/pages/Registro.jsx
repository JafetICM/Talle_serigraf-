import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/com-pusa.png';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede agregar la lógica para enviar los datos a una base de datos
    console.log("Datos de Registro:", formData);
    alert("¡Registro completado con éxito!");
    navigate('/iniciar-sesion'); // Redirige a la pantalla de inicio de sesión después del registro
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Logo centrado */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Com-Pusa" className="w-32 h-32" />
        </div>
        
        {/* Título del formulario */}
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Crea tu cuenta ahora!!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          
          {/* Botón de crear cuenta */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Crear cuenta
          </button>
        </form>

        {/* Redirección a iniciar sesión */}
        <p className="text-center text-sm text-gray-600 mt-4">
          ¿Ya tienes una cuenta?{' '}
          <span
            onClick={() => navigate('/iniciar-sesion')}
            className="text-blue-600 hover:underline cursor-pointer font-medium"
          >
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registro;
