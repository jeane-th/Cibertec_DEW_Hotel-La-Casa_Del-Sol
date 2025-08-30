import React from "react";


const servicios = [
  { icono: "🌐", titulo: "Wi-Fi de Alta Velocidad" },
  { icono: "🏊‍♀️", titulo: "Piscina Familiar" },
  { icono: "💪", titulo: "Gimnasio 24/7" },
  { icono: "💆‍♀️", titulo: "Spa y Centro de Bienestar" }
];

export const Servicios = () => {
  return (
    <section id="servicios" className="seccion">
      <div className="container">
        <h2 className="titulo-seccion"> Nuestros Servicios</h2>
        <div className="cuadricula-servicios">
          {servicios.map((servicio, index) => (
            <div className="servicio-item" key={index}>
              <div className="icono-servicio">{servicio.icono}</div>
              <h4>{servicio.titulo}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

