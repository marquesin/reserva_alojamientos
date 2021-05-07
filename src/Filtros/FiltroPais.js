function FiltroPais(props) {
  return (
    <div>
      <h4 className="nombreFiltro">Pais:</h4>
      <select
        name="CountryFilter"
        id="filterCountry"
        className="filters"
        onChange={props.manejarCambioPais}
        value={props.pais}
      >
        <option value="todos">Todos los paises </option>
        <option value="Argentina">Argentina</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
      </select>
    </div>
  );
}
export default FiltroPais;
