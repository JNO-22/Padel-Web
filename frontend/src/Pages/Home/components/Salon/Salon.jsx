import "./salon.css";
import Carousel from "./Carousel";

const Salon = () => {
  return (
    <div className="salon-section">
      <div className="salon-container">
        <div className="salon-text">
          Nuestro salon cuenta con una elegante decoración y un amplio espacio
          que se adapta a tus necesidades. Además, ofrecemos servicios
          personalizados de catering y un equipo de profesionales que te
          ayudarán a planificar y llevar a cabo cualquier tipo de celebración,
          desde bodas y fiestas de cumpleaños hasta conferencias y reuniones
          corporativas. Estamos comprometidos a hacer que tu evento sea
          inolvidable y exitoso.
        </div>
        <div className="carousel-section">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Salon;
