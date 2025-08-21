import React, { useEffect, useState } from 'react';
import BannerUno from '../assets/images/Banner1.jpg'
import BannerDos from '../assets/images/Banner2.jpg'
import BannerTres from '../assets/images/Banner3.jpg'


export const Header = () => {

  const imagenesSlider = [BannerUno, BannerDos, BannerTres];
  const [imagenActualIndex, setImagenActualIndex] = useState(0);
  // Efecto Use para intevervalo de efecto carrusel
  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setImagenActualIndex(prevIndex => (prevIndex + 1) % imagenesSlider.length);
    }, 5000);
    return () => clearInterval(sliderTimer);
  }, [imagenesSlider.length]);

  // Funciones para los botones del carrusel
  const imagenSiguienteDerecha = () => {
    setImagenActualIndex(siguienteIndex => (siguienteIndex + 1) % imagenesSlider.length);
  };

  const imagenSiguienteIzquierda = () => {
    setImagenActualIndex(previoIndex => (previoIndex - 1 + imagenesSlider.length) % imagenesSlider.length);
  };


  return (
    <header className="encabezado">
      <img src={imagenesSlider[imagenActualIndex]} className="encabezado-imagen-fondo" />
      <div className="encabezado-contenido">
        <h1>Bienvenido a Hotel Paraíso</h1>
        <p>Tu escapada de lujo te espera</p>
        <a href="#habitaciones" className="btn">Ver Habitaciones</a>
      </div>
    </header>
  );
};


