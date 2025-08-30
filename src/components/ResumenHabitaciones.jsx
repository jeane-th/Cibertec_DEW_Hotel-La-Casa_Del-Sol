import React from "react";

import imgSuiteKing from "../assets/images/Habitación-Suite-CamaKing.png";
import imgSimple from "../assets/images/Habitación-simple.png";
import imgDobleStandard from "../assets/images/Habitación-doble-standard.png";
import imgEjecutivaDoble from "../assets/images/Habitación-ejecutiva-doble.png";
import imgEjecutivaKing from "../assets/images/Habitación-ejecutiva-king.png";
import { Link } from "react-router-dom";

const listaHabitaciones = [
  { id: "suite-king", titulo: "Suite Cama King", imagen: imgSuiteKing, capacidad: 2, 
    desc: "Experimenta el máximo lujo en nuestra Suite con Cama King. Espaciosa, elegante y con vistas impresionantes, es el refugio perfecto para una estancia inolvidable."},
  { id: "simple", titulo: "Habitación Standard Simple", imagen: imgSimple, },
  { id: "doble-standard", titulo: "Habitación Doble Standard", imagen: imgDobleStandard, },
  { id: "ejecutiva-doble", titulo: "Habitación Ejecutiva Doble", imagen: imgEjecutivaDoble, },
  { id: "ejecutiva-king", titulo: "Habitación Ejecutiva King", imagen: imgEjecutivaKing, }
];

export const ResumenHabitaciones = () => {
  
  const habitacionPrincipal = listaHabitaciones[0];
  const habitacionesGaleria = listaHabitaciones.slice(1, 5);

  return (
    <section id="habitaciones" className="seccion fondo-claro">
      <div className="container">
        <h2 className="titulo-seccion">Nuestras Habitaciones</h2>
        <div className="contenedor-interactivo-habitaciones">

          <div className="vista-detallada">
            <img src={habitacionPrincipal.imagen} alt={habitacionPrincipal.titulo} className="imagen-principal" />
            <h3 className="titulo-detalle">{habitacionPrincipal.titulo}</h3>
            <div className="info-capacidad">
              <div>👤</div>
              <span>{habitacionPrincipal.capacidad} personas</span>
            </div>
            <p className="descripcion-detalle">{habitacionPrincipal.desc}</p>
            <Link to="/Habitaciones" className="btn">Ver habitaciones</Link>
          </div>

          <div className="galeria-seleccion">
            {habitacionesGaleria.map(habitacion => (
              <div key={habitacion.id} className="item-galeria">
                <img src={habitacion.imagen} alt={habitacion.titulo} />
                <div className="titulo-superpuesto">{habitacion.titulo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
