import React, { useEffect, useState } from "react";
import BannerUno from "../assets/images/Banner1.jpg";
import BannerDos from "../assets/images/Banner2.jpg";
import BannerTres from "../assets/images/Banner3.jpg";
import { Link } from "react-router-dom";


export const Header = () => {

  const imagenesCarussel = [BannerUno, BannerDos, BannerTres];
  const [imagenActualIndex, setImagenActualIndex] = useState(0);


  useEffect(() => {
    const intervaloCarussel = setInterval(() => {
      setImagenActualIndex(prevIndex => (prevIndex - 1 + imagenesCarussel.length) % imagenesCarussel.length);
    }, 8000);
    return () => clearInterval(intervaloCarussel);
  }, []);


  return (
    <header className="encabezado">
      <img src={imagenesCarussel[imagenActualIndex]} className="encabezado-imagen-fondo" />
      <div className="encabezado-contenido">
        <h1>Bienvenido a La Casa del Sol</h1>
        <p>Tu escapada de lujo te espera</p>
        <Link to="/Habitaciones" className="btn btn-header">Ver Habitaciones</Link>
      </div>
    </header>
  );
};


