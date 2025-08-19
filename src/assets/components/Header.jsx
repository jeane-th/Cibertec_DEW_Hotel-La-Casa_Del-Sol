import React from 'react';

export const Header = () => {
  return (
    <header className="encabezado">
      <div className="encabezado-contenido">
        <h1>Bienvenido al Hotel La Casa del Sol</h1>
        <p>Tu escapada te espera</p>
        <a href="#habitaciones" className="btn">Ver Habitaciones</a>
      </div>
    </header>
  );
};
