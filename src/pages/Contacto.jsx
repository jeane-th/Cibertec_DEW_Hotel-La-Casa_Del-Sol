import React from 'react';
import './Contacto.css'

export const Contacto = () => {
  return (
    <>
      <main className="container">
        <div className="pagina-titulo">
          <h1>Ponte en Contacto con Nosotros</h1>
        </div>

        <div className="contacto-diseño">
          <div className="contacto-form-container">
            <h2> 👋 Envíanos un mensaje</h2>

            <form action="#">
              <div className="formulario-grupo">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="formulario-grupo">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="formulario-grupo">
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="formulario-grupo">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn btn-primario">
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="contacto-info-container">
            <h2> 🌏 Nuestra ubicación</h2>
     
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.955513511195!2d-77.05051658466185!3d-11.97904084282381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d15c898c1995%3A0xedb9a67a064f728c!2sAv.%20Carlos%20Izaguirre%20233%2C%20Independencia%2015311%2C%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1625098901234!5m2!1ses-419!2spe"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />
            <br />
            <h3>Información Adicional</h3>
            <p>
              <strong>Dirección:</strong> Av. Carlos Izaguirre 233,
              Independencia 15311
            </p>
            <p>
              <strong>Teléfono</strong> +51 916325859
            </p>
            <p>
              <strong>Teléfono / WhatsApp:</strong>{' '}
              <a href="https://wa.me/51916325859" target="_blank" rel="noopener noreferrer">
                +51 916325859
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contacto@hotelparaiso.com">
                contacto@hotelparaiso.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contacto;