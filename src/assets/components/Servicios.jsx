import React from 'react';

// Iconos SVG como componentes para un look más profesional
const IconoWifi = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.556a5.5 5.5 0 017.778 0M12 20.25a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008c0-.414.336-.75.75-.75zM4.465 12.336a10.5 10.5 0 0115.07 0"></path></svg>;
const IconoPiscina = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.884 21H16.116M12 21v-4.243"></path></svg>;
const IconoGym = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
const IconoSpa = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg>;

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
