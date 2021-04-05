import { useState } from "react";
import "./App.css";
import HotelCard from "./HotelCard";
import Navbar from "./Navbar";
import hotelesTotales from "./data";

function App() {

  const [filtros, setFiltros] = useState({
    fechaIngreso: "",
    fechaSalida: "",
    pais: "",
    precio: "",
    tamaño: "",
  });

  const { fechaIngreso, fechaSalida, pais, precio, tamaño } = filtros;

  const seleccionarFechaIngreso = evento => {
    const timestampDeInicio = new Date(evento.target.value).valueOf();
    setFiltros({ ...filtros, fechaIngreso: timestampDeInicio });
  };

  const seleccionarFechaSalida = evento => {
    const timestampDeSalida = new Date(evento.target.value).valueOf();
    setFiltros({ ...filtros, fechaSalida: timestampDeSalida });
  };

  const seleccionarPais = evento => {
    setFiltros({ ...filtros, pais: evento.target.value });
  };

  const seleccionarPrecio = evento => {
    const precio = parseInt(evento.target.value);
    setFiltros({ ...filtros, precio: precio });
  };

  const seleccionarTamaño = evento => {
    setFiltros({ ...filtros, tamaño: evento.target.value });
  };

  const filtrarHoteles = () => {
    let habitacionesMinimas;
    let habitacionesMaximas;

    if (tamaño === "pequeño") {
      habitacionesMinimas = 0;
      habitacionesMaximas = 10;
    } else if (tamaño === "mediano") {
      habitacionesMinimas = 10;
      habitacionesMaximas = 20;
    } else if (tamaño === "grande") {
      habitacionesMinimas = 20;
    }

    const hotelesFiltrados = hotelesTotales.filter(hotel => {
      const tieneDisponibilidad =
        (!fechaIngreso || hotel.availabilityFrom <= fechaIngreso) &&
        (!fechaSalida || hotel.availabilityTo >= fechaSalida);

      const esDelPrecioCorrespondiente = !precio || hotel.price === precio;
      const esDelPaisCorrespondiente = !pais || hotel.country === pais;
      const esDelTamañoCorrespondiente =
        (!habitacionesMinimas || hotel.rooms > habitacionesMinimas) &&
        (!habitacionesMaximas || hotel.rooms <= habitacionesMaximas);

      if (tieneDisponibilidad && esDelPrecioCorrespondiente && esDelPaisCorrespondiente && esDelTamañoCorrespondiente) {
        return hotel;
      }
    });
    return hotelesFiltrados;
  };

  const hotelesFiltrados = filtrarHoteles();

  return (
    <div className='App'>
      <Navbar
        seleccionarFechaIngreso={seleccionarFechaIngreso}
        seleccionarFechaSalida={seleccionarFechaSalida}
        seleccionarPais={seleccionarPais}
        seleccionarPrecio={seleccionarPrecio}
        seleccionarTamaño={seleccionarTamaño}
        filtros={filtros}
      />
      <div className='container-hoteles'>
        {hotelesFiltrados.map((hotel, index) => (
          <HotelCard hotel={hotel} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
