import React from 'react';
import HotelNosotros from '../assets/images/hotel-nosotros.jpg'

export const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="seccion">
      <div className="container">
        <h2 className="titulo-seccion">Sobre Nosotros</h2>
        <div className="cuadricula-sobre-nosotros">
          <div>
            <p>
              Bienvenidos a La Casa del Sol, un espacio pensado para ofrecer comodidad, tranquilidad y 
              atención de calidad. Más que un hotel, somos una experiencia diseñada para que te sientas 
              como en casa desde el primer momento.
            </p>
            <br />
            <p>
              Como parte de nuestro compromiso con la mejora continua, hemos desarrollado una plataforma 
              digital moderna que permite a nuestros huéspedes consultar la disponibilidad de habitaciones, 
              conocer detalles como precios y servicios, y realizar reservas en línea de forma rápida y sencilla.
            </p>
          </div>
          <img src={HotelNosotros} alt="Lobby del Hotel" className="imagen-sobre-nosotros" />
        </div>
      </div>
    </section>
  );
};
