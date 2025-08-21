import React from 'react';

// Importamos las imágenes para que Vite las procese
import img1 from '../assets/images/Habitación-Suite-CamaKing.png';
import img2 from '../assets/images/Area-comun-indoors.png';
import img3 from '../assets/images/Area-comun-outdoor-con-luz.png';
import img4 from '../assets/images/Habitación-ejecutiva-doble.png';
import img5 from '../assets/images/Area-comun-outdoor-sin-luz.png';
import img6 from '../assets/images/Habitación-doble-standard.png';

const images = [img1, img2, img3, img4, img5, img6];

export const Galeria = () => {
  return (
    <section id="galeria" className="seccion fondo-claro">
      <div className="container">
        <h2 className="titulo-seccion"> 📷 Galería</h2>
        <div className="cuadricula-galeria">
          {images.map((image, index) => (
            <div className="tarjeta-galeria" key={index}>
              <img src={image} alt={`Galería del hotel ${index + 1}`} className="imagen-galeria" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
