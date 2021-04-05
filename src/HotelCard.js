import { FaMapMarkerAlt, FaBed } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  const { photo, description, name, city, country, rooms, price } = hotel;

  return (
    <div className='container-hotel'>
      <div className='image-container'>
        <img src={photo} alt='' />
      </div>
      <div className='content'>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className='container-etiquetas'>
          <div className='etiqueta'>
            <span className='icono'>
              <FaMapMarkerAlt />
            </span>
            <span className='texto'>
              {city}, {country}
            </span>
          </div>
          <div className='etiqueta'>
            <span className='icono'>
              <FaBed />
            </span>
            <span className='texto'>{rooms} Habitaciones</span>
          </div>
          <div className='etiqueta'>
            <span className='icono'>
              {"$".repeat(price)}
              <span className='inactivo'>{"$".repeat(4 - price)}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="reservar">Reservar</div>

    </div>
  );
};

export default HotelCard;
