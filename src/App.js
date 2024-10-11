import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ComienzaAqui from './pages/ComienzaAqui';
import Registro from './pages/Registro';
import IniciarSesion from './pages/IniciarSesion';
import AcercaDe from './pages/AcercaDe';
import Contacto from './pages/Contacto';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comienza-aqui" element={<ComienzaAqui />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
