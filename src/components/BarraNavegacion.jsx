import React, { useEffect, useState } from 'react';
import logo from '../assets/images/Logo-header.jpeg';
import { Link } from 'react-router-dom';

export const BarraNavegacion = () => {

  const mensajesInformativos = [
    { texto: "📅 Lunes - Domingo: Las 24 horas del día!", clase: "item-barra-superior" },
    { texto: "🎉 Reserva ahora y obtén un 10% de descuento", clase: "item-barra-superior promocion" },
    { texto: <>💬 ¿Dudas? Escríbenos por <span className="resaltar-wsp-mensaje">WhatsApp</span></>, clase: "item-barra-superior whatsapp", url: 'https://wa.me/51916325859' }
  ];

  const [mensajeActualIndex, setMensajeActualIndex] = useState(0);

  useEffect(() => {

    const intevervaloMensaje = setInterval(() => {
      setMensajeActualIndex((prevIndex) => (prevIndex + 1) % mensajesInformativos.length);
    }, 5000);

    return () => clearInterval(intevervaloMensaje);
  }, [mensajesInformativos.length]);



  return (
    <header>
      <div className="barra-superior">
        {/* Solo renderizamos un mensaje, el que está en el índice actual */}

        {mensajesInformativos.map((mensaje, index) => (
          index === mensajeActualIndex && (
            <div key={index} className={mensaje.clase}>
              {mensaje.url ? (
                <a href={mensaje.url} target="_blank" rel="noopener noreferrer">
                  {mensaje.texto}
                </a>
              ) : (
                <span>{mensaje.texto}</span>
              )}
            </div>
          )
        ))}
      </div>

      <nav className="barra-navegacion">
        <div className="container">
          <Link to="/" className="barra-navegacion-marca">
            <img src={logo} alt="Hotel Logo" />
          </Link>
          <ul className="barra-navegacion-enlaces">

            <li><Link to="/Home" className="active">Home</Link></li>
            <li><Link to="/Habitaciones" className="active">Habitaciones</Link></li>
            <li><Link to="/Galeria" className="active">Galería</Link></li>
            <li><Link to="/Contacto" className="active">Contacto</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};


