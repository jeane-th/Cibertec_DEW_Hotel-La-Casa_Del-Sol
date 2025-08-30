import { useState } from "react";
import "./HabitacionDetail.css";

const roomImages = [
  "/Cibertec_DEW_Hotel-La-Casa_Del-Sol/imgHabitacionDetail/room1.jpg",
  "/Cibertec_DEW_Hotel-La-Casa_Del-Sol/imgHabitacionDetail/room2.jpg",
  "/Cibertec_DEW_Hotel-La-Casa_Del-Sol/imgHabitacionDetail/room3.jpg",
  "/Cibertec_DEW_Hotel-La-Casa_Del-Sol/imgHabitacionDetail/room4.jpg",
];
const services = [
  { name: "Wifi gratis", icon: "https://img.icons8.com/ios/50/wifi--v1.png" },
  {
    name: "Lounge ejecutivo",
    icon: "https://img.icons8.com/ios/50/conference.png",
  },
  { name: "Restaurante", icon: "https://img.icons8.com/ios/50/restaurant.png" },
  { name: "Piscina", icon: "https://img.icons8.com/ios/50/swimming-pool.png" },
  { name: "Pet Friendly", icon: "https://img.icons8.com/ios/50/dog.png" },
  { name: "Spa", icon: "https://img.icons8.com/ios/50/spa.png" },
  { name: "Gimnasio", icon: "https://img.icons8.com/ios/50/dumbbell.png" },
];

const highlights = [
  "Capacidad para 2 personas",
  "Artículos de cortesía para el baño",
  "Televisor 37 pulgadas",
  "Habitaciones comunicadas",
  "Cafetera",
  "Plancha",
  "Secador de cabello",
  "Minibar",
  "Aire acondicionado",
];

const fakePromos = [
  "🎁 2x1 en cenas románticas los viernes",
  "🍷 Botella de vino gratis en tu llegada",
  "🛏️ Check-out extendido hasta las 3 PM",
  "💆 Spa gratis para 2 personas en estancias largas",
  "🚖 Transporte gratis al aeropuerto",
];


export const HabitacionDetail = () => {
  const [promos, setPromos] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const [currentService, setCurrentService] = useState(0);

  const handleShowPromos = () => {
    const newPromos = fakePromos.sort(() => 0.5 - Math.random()).slice(0, 2);
    setPromos(newPromos);
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? roomImages.length - 1 : prev - 1));
  };

  const nextImg = () => {
    setCurrentImg((prev) => (prev === roomImages.length - 1 ? 0 : prev + 1));
  };

  // Carrusel de servicios: 3 por página
  const servicesPerPage = 3;
  const totalServicePages = Math.ceil(services.length / servicesPerPage);

  const prevService = () => {
    setCurrentService((prev) =>
      prev === 0 ? totalServicePages - 1 : prev - 1
    );
  };

  const nextService = () => {
    setCurrentService((prev) =>
      prev === totalServicePages - 1 ? 0 : prev + 1
    );
  };

  const serviceStart = currentService * servicesPerPage;
  const serviceEnd = serviceStart + servicesPerPage;
  const visibleServices = services.slice(serviceStart, serviceEnd);


  return (
  <div className="habitacion-container">
      <div className="habitacion-row">
        {/* Carrusel de imágenes */}
        <div className="habitacion-col habitacion-col-img">
          <div className="habitacion-carousel">
            <div className="habitacion-carousel-wrapper">
              <button
                className="habitacion-carousel-arrow prev"
                aria-label="Anterior"
                onClick={prevImg}
              >
                &#8592;
              </button>
              <div className="habitacion-carousel-inner">
                <div className="habitacion-carousel-item active">
                  <img
                    src={roomImages[currentImg]}
                    className="habitacion-carousel-img"
                    alt={`Habitación ${currentImg + 1}`}
                  />
                </div>
              </div>
              <button
                className="habitacion-carousel-arrow next"
                aria-label="Siguiente"
                onClick={nextImg}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>

        {/* Detalle */}
        <div className="habitacion-col habitacion-col-detalle">
          <h2 className="habitacion-title">Detalle de la Habitación</h2>
          <p className="habitacion-desc">
            Nuestras habitaciones están diseñadas para ofrecer comodidad y
            estilo. Perfectas para descansar después de un día de aventuras o
            negocios.
          </p>
          <button className="habitacion-btn habitacion-btn-reserva">
            Reserva ya desde S/. 180
          </button>
        </div>
      </div>

      {/* Servicios */}
      <div className="habitacion-servicios-section">
        <h3 className="habitacion-subtitle">Servicios</h3>
        <div className="habitacion-servicios-carousel">
          <button
            className="habitacion-servicios-arrow prev"
            aria-label="Anterior"
            onClick={prevService}
          >
            &#8592;
          </button>
          <div className="habitacion-servicios-group">
            {visibleServices.map((service, i) => (
              <div key={i} className="habitacion-servicio-item">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="habitacion-servicio-icon"
                />
                <p className="habitacion-servicio-nombre">{service.name}</p>
              </div>
            ))}
          </div>
          <button
            className="habitacion-servicios-arrow next"
            aria-label="Siguiente"
            onClick={nextService}
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Destacados */}
      <div className="habitacion-destacados">
        {highlights.map((item, index) => (
          <div className="habitacion-destacado-item" key={index}>
            <span>• {item}</span>
          </div>
        ))}
      </div>

      {/* Promociones */}
      <div className="habitacion-promos">
        <h3 className="habitacion-subtitle">Promociones Especiales</h3>
        <p className="habitacion-promo-desc">
          Reserva 3 noches y recibe un 20% de descuento en tu estadía. Incluye
          desayuno buffet todos los días.
        </p>
        <button
          className="habitacion-btn habitacion-btn-promo"
          onClick={handleShowPromos}
        >
          Ver más promociones
        </button>
        {promos.length > 0 && (
          <ul className="habitacion-promo-list">
            {promos.map((promo, i) => (
              <li key={i} className="habitacion-promo-item">
                {promo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
