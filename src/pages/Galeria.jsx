import React, { useState } from "react";
import "./Galeria.css";

import img1 from "../assets/images/deluxeSuite.png";
import img2 from "../assets/images/ejecutivaDoble.png";
import img3 from "../assets/images/piscinaPrincipal.png";
import img4 from "../assets/images/zonaSpaRelax.png";
import img5 from "../assets/images/jardin.png";
import img6 from "../assets/images/restauranteGourmet.png";
import img7 from "../assets/images/buffetInternacional.png";
import img8 from "../assets/images/salonConferencias.png";
import img9 from "../assets/images/boda.png";
import img10 from "../assets/images/piscinaNocturna.png";
import img11 from "../assets/images/habitacionFamiliar.png";
import img12 from "../assets/images/masajesSauna.png";

const categorias = [
  "Todos",
  "Habitaciones",
  "Piscina",
  "Spa",
  "Jardín",
  "Restaurante",
  "Eventos"
];

const fotos = [
  { id: 1, categoria: "Habitaciones", nombre: "Suite Deluxe", img: img1 },
  { id: 2, categoria: "Habitaciones", nombre: "Ejecutiva Doble", img: img2 },
  { id: 3, categoria: "Piscina", nombre: "Piscina Principal", img: img3 },
  { id: 4, categoria: "Spa", nombre: "Zona Spa Relax", img: img4 },
  { id: 5, categoria: "Jardín", nombre: "Jardín del Hotel", img: img5 },
  { id: 6, categoria: "Restaurante", nombre: "Restaurante Gourmet", img: img6 },
  { id: 7, categoria: "Restaurante", nombre: "Buffet Internacional", img: img7 },
  { id: 8, categoria: "Eventos", nombre: "Salón de Conferencias", img: img8 },
  { id: 9, categoria: "Eventos", nombre: "Boda en el Jardín", img: img9 },
  { id: 10, categoria: "Piscina", nombre: "Piscina Nocturna", img: img10 },
  { id: 11, categoria: "Habitaciones", nombre: "Habitación Familiar", img: img11 },
  { id: 12, categoria: "Spa", nombre: "Masajes y Sauna", img: img12 }
];

export const Galeria = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const fotosFiltradas =
    categoriaActiva === "Todos"
      ? fotos
      : fotos.filter((f) => f.categoria === categoriaActiva);

  return (
    <section className="galeria">
      <div className="galeria-banner">
        <h2 className="galeria-titulo">📷 GALERÍA</h2>
        <h1 className="galeria-subtitulo">CONOCE MÁS DE NUESTRO HOTEL</h1>
      </div>

      <div className="galeria-filtros">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`filtro-btn ${categoriaActiva === cat ? "activo" : ""}`}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="galeria-grid">
        {fotosFiltradas.map((foto) => (
          <div key={foto.id} className="galeria-item">
            <img src={foto.img} alt={foto.nombre} className="galeria-img" />
            <div className="overlay">
              <p>{foto.nombre}</p>
              <span className="categoria">{foto.categoria}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;

