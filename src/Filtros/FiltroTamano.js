function FiltroTamano(props) {
  return (
    <div>
      <h4 className="nombreFiltro">Tamaño:</h4>
      <select
        name="RoomsFilter"
        className="filters"
        id="filterRooms"
        onChange={props.manejarCambioTamano}
        value={props.tamano}
      >
        <option value="todos">Todos los tamaños </option>
        <option value="pequeño">Hoteles pequeños</option>
        <option value="mediano">Hoteles medianos</option>
        <option value="grande">Hoteles grandes</option>
      </select>
    </div>
  );
}
export default FiltroTamano;
