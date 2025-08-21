import React from 'react';
import LogoWhatsApp from '../assets/images/RedesSociales/WhatsApp.png'
import LogoInstagram from '../assets/images/RedesSociales/Instagram.png'
import LogoFacebook from '../assets/images/RedesSociales/Facebook.png'

const Redes = [
  { alt: "WhatsApp", imagen: LogoWhatsApp, url: "https://web.whatsapp.com"},
  { alt: "Instagram", imagen: LogoInstagram, url: "https://instagram.com"},
  { alt: "Facebook", imagen: LogoFacebook, url: "https://facebook.com"},
];



export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-contenido">
          <div>
            <h4>Información Adicional</h4>
                <p><strong>Dirección:</strong> Av. Carlos Izaguirre 233, Independencia 15311</p>
                <p><strong>Teléfono</strong> +51 916325859</p>
                <p><strong>Teléfono / WhatsApp:</strong> <a href="https://wa.me/51916325859" target="_blank">+51 916325859</a></p>
            <p><strong>Email:</strong> <a href="mailto:contacto@hotelparaiso.com">contacto@hotelparaiso.com</a></p>
          </div>
          <div className="footer-redes">
            <ul>
              {Redes.map(redsocial => (
                <li key={redsocial.alt}>
                  <a href={redsocial.url} target="_blank">
                    <img src={redsocial.imagen} alt={redsocial.alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-fondo">
          <p>&copy; 2025 Hotel Paraíso</p>
        </div>
      </div>
    </footer>
  );
};
