import React from 'react';

// Importamos todas las imágenes necesarias
import imgSuiteKing from '../assets/images/Habitación-Suite-CamaKing.png';
import imgSimple from '../assets/images/Habitación-simple.png';
import imgDobleStandard from '../assets/images/Habitación-doble-standard.png';
import imgEjecutivaDoble from '../assets/images/Habitación-ejecutiva-doble.png';
import imgEjecutivaKing from '../assets/images/Habitación-ejecutiva-king.png';
import { Link } from 'react-router-dom';

// Array con la información detallada de todas las habitaciones
const listaHabitaciones = [
  {
    id: 'suite-king',
    title: 'Suite Cama King',
    img: imgSuiteKing,
    capacidad: 2,
    desc: 'Experimenta el máximo lujo en nuestra Suite con Cama King. Espaciosa, elegante y con vistas impresionantes, es el refugio perfecto para una estancia inolvidable.'
  },
  {
    id: 'simple',
    title: 'Habitación Standard Simple',
    img: imgSimple,
  },
  {
    id: 'doble-standard',
    title: 'Habitación Doble Standard',
    img: imgDobleStandard,
  },
  {
    id: 'ejecutiva-doble',
    title: 'Habitación Ejecutiva Doble',
    img: imgEjecutivaDoble,
  },
  {
    id: 'ejecutiva-king',
    title: 'Habitación Ejecutiva King',
    img: imgEjecutivaKing,
  }
];

export const ResumenHabitaciones = () => {
  // Separamos la habitación principal de las de la galería
  const habitacionPrincipal = listaHabitaciones[0];
  const habitacionesGaleria = listaHabitaciones.slice(1, 5); // Tomamos las siguientes 4

  return (
    <section id="habitaciones" className="seccion fondo-claro">
      <div className="container">
        <h2 className="titulo-seccion">Nuestras Habitaciones</h2>
        <div className="contenedor-interactivo-habitaciones">
          
          {/* Columna Izquierda: Detalles de la habitación principal */}
          <div className="vista-detallada">
            <img src={habitacionPrincipal.img} alt={habitacionPrincipal.title} className="imagen-principal" />
            <h3 className="titulo-detalle">{habitacionPrincipal.title}</h3>
            <div className="info-capacidad">
              <div>👤</div>
              <span>{habitacionPrincipal.capacidad} personas</span>
            </div>
            <p className="descripcion-detalle">{habitacionPrincipal.desc}</p>
            <Link to="/Reservar" className="btn">Reservar</Link>
          </div>

          {/* Columna Derecha: Galería estática */}
          <div className="galeria-seleccion">
            {habitacionesGaleria.map(hab => (
              <div key={hab.id} className="item-galeria">
                <img src={hab.img} alt={hab.title} />
                <div className="titulo-superpuesto">{hab.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
