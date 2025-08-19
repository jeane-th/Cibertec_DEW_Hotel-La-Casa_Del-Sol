import React from 'react';

export const Header = () => {
  return (
    <header className="encabezado">
      <div className="encabezado-contenido">
        <h1>Bienvenido a Hotel Paraíso</h1>
        <p>Tu escapada de lujo te espera</p>
        <a href="#habitaciones" className="btn">Ver Habitaciones</a>
      </div>
    </header>
  );
};
