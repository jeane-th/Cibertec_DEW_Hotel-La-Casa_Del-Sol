import React from 'react';
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom';

export const BarraNavegacion = () => {


  return (
    <nav className="barra-navegacion">
      <div className="container">
        <Link to="/" className="barra-navegacion-marca">
          <img src={logo} alt="Hotel Logo" />
        </Link>
        <ul className="barra-navegacion-enlaces">

          <li><Link to="/Home" class="active">Home</Link></li>
          <li><Link to="/Habitaciones" class="active">Habitaciones</Link></li>
          <li><Link to="/Galeria" class="active">Galería</Link></li>
          <li><Link to="/Reservar" class="active">Reservar</Link></li>
          <li><Link to="/Contacto" class="active">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};


