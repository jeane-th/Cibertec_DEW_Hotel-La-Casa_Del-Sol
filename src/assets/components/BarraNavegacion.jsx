import React from 'react';
import logo from '../images/Logo.png';

export const BarraNavegacion = () => {
  return (
    <nav className="barra-navegacion">
      <div className="container">
        <a className="barra-navegacion-marca" href="#">
          <img src={logo} alt="Hotel Logo" />
        </a>
        <ul className="barra-navegacion-enlaces">
          
          <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
          <li><a href="#habitaciones">Habitaciones</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};


