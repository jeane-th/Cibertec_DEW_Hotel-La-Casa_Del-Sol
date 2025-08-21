import React from 'react';

export const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="seccion">
      <div className="container">
        <h2 className="titulo-seccion">Sobre Nosotros</h2>
        <div className="cuadricula-sobre-nosotros">
          <div>
            <p>
              Bienvenidos a nuestro hotel, un oasis de tranquilidad y confort. 
              Nuestra misión es ofrecer una experiencia inolvidable a cada uno de nuestros huéspedes, 
              combinando un servicio excepcional con instalaciones de primera clase.
            </p>
          </div>
          <img src="https://placehold.co/500x300/000000/ffffff?text=Imagen+de+negocio" alt="Lobby del Hotel" className="imagen-sobre-nosotros" />
        </div>
      </div>
    </section>
  );
};