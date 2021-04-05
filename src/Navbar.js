const Navbar = ({
  seleccionarFechaIngreso,
  seleccionarFechaSalida,
  seleccionarPais,
  seleccionarPrecio,
  seleccionarTamaño,
  fechaMinimaDeInicio,
  filtros
}) => {
  const { fechaIngreso, fechaSalida, precio, tamaño, pais } = filtros;

  const fechaDeInicioLegible =
    fechaIngreso &&
    new Intl.DateTimeFormat("es-ES", { year: "numeric", day: "numeric", weekday: "long", month: "long" }).format(
      new Date(fechaIngreso)
    );
  const fechaDeSalidaLegible =
    fechaSalida &&
    new Intl.DateTimeFormat("es-ES", { year: "numeric", day: "numeric", weekday: "long", month: "long" }).format(
      new Date(fechaSalida)
    );

  return (
    <div className='navbar'>
      <div className='hero'>
        <h1>Hoteles</h1>
        <p>
          desde el <span>{fechaDeInicioLegible}</span> hasta el <span>{fechaDeSalidaLegible}</span>
        </p>
      </div>
      <div className='filtros'>
        <input
          type='date'
          name='fecha-de-ingreso'
          placeholder='dd/mm/yyyy'
          value={new Date(fechaIngreso).toLocaleDateString("en-CA")}
          min={new Date(fechaMinimaDeInicio).toLocaleDateString("en-CA")}
          onChange={seleccionarFechaIngreso}
        />
        <input
          type='date'
          name='fecha-de-salida'
          value={new Date(fechaSalida).toLocaleDateString("en-CA")}
          placeholder='dd/mm/yyyy'
          min={new Date(fechaIngreso).toLocaleDateString("en-CA")}
          onChange={seleccionarFechaSalida}
        />
        <select value={pais} name='country' onChange={seleccionarPais}>
          <option value=''> Todos los paises </option>
          <option value='Argentina'> Argentina </option>
          <option value='Brasil'> Brasil </option>
          <option value='Chile'> Chile </option>
          <option value='Uruguay'> Uruguay </option>
        </select>
        <select name='price' value={precio} onChange={seleccionarPrecio}>
          <option value=''> Cualquier precio </option>
          <option value={1}> $ </option>
          <option value={2}> $$ </option>
          <option value={3}> $$$ </option>
          <option value={4}> $$$$ </option>
        </select>
        <select name='rooms' value={tamaño} onChange={seleccionarTamaño}>
          <option value=''> Cualquier tamaño </option>
          <option value='pequeño'> Hotel pequeño </option>
          <option value='mediano'> Hotel mediano </option>
          <option value='grande'> Hotel grande </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
