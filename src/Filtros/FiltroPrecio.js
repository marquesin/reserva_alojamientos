function FiltroPrecio(props) {
  return (
    <div>
      <h4 className="nombreFiltro">Precio:</h4>
      <select
        name="PriceFilter"
        id="filterPrice"
        className="filters"
        onChange={props.manejarCambioPrecio}
        value={props.precio}
      >
        <option value="todos" >
          Todos los precios
        </option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </select>
    </div>
  );
}
export default FiltroPrecio;
