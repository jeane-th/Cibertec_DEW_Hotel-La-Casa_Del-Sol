import React from 'react';


const servicios = [
  { icon: "🌐", title: 'Wi-Fi de Alta Velocidad' },
  { icon: "🏊‍♀️", title: 'Piscina Familiar' },
  { icon: "💪", title: 'Gimnasio 24/7' },
  { icon: "💆‍♀️", title: 'Spa y Centro de Bienestar' }
];

export const Servicios = () => {
  return (
    <section id="servicios" className="seccion">
      <div className="container">
        <h2 className="titulo-seccion"> Nuestros Servicios</h2>
        <div className="cuadricula-servicios">
          {servicios.map((servicio, index) => (
            <div className="servicio-item" key={index}>
              <div className="icono-servicio">{servicio.icon}</div>
              <h4>{servicio.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

