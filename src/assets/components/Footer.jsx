import React from 'react';

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
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div className="footer-fondo">
          <p>&copy; 2025 Hotel La Casa del Sol</p>
        </div>
      </div>
    </footer>
  );
};
