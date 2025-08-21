import React from 'react';

export const Testimonios = () => {
  return (
    <section id="testimonios" className="seccion fondo-claro">
      <div className="container">
        <h2 className="titulo-seccion">Lo que dicen nuestros huéspedes</h2>
        <div className="cuadricula-testimonios">
          <div className="tarjeta-testimonio">
            <p>"Una estancia maravillosa. El personal fue increíblemente atento y las instalaciones son de primera. ¡Totalmente recomendado!"</p>
            <footer className="autor-testimonio">- Juan Pérez</footer>
          </div>
          <div className="tarjeta-testimonio">
            <p>"El mejor hotel en el que me he alojado. Las habitaciones son lujosas y la comida del restaurante es exquisita. Volveré sin duda."</p>
            <footer className="autor-testimonio">- María García</footer>
          </div>
        </div>
      </div>
    </section>
  );
};
