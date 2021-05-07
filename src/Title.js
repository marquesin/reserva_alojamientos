import { today } from "./hoteles";

const Title = ({ salida, llegada, pais, precio, tamano }) => {
  const tiposDeDatos = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  var busqueda =
    precio !== "todos" ||
    pais !== "todos" ||
    tamano !== "todos" ||
    llegada < salida
      ? `Búsqueda de hotel`
      : "";
  var price =
    precio == "todos"
      ? ""
      : precio == 1
      ? ` economico`
      : precio == 2
      ? ` moderado`
      : precio == 3
      ? ` un poco elevado`
      : precio == 4
      ? ` elevado`
      : "";
  let fechaDeLLegada =
    llegada !== "" && llegada < salida
      ? ` desde el  
${new Date(llegada + "T00:00").toLocaleDateString("es-ES", tiposDeDatos)} 
    `
      : "";
  let fechaDeSalida =
    salida !== "" && salida > llegada
      ? ` hasta el 
${new Date(salida + "T00:00").toLocaleDateString("es-ES", tiposDeDatos)} 
    `
      : "";
  let paisElegido = pais !== "todos" ? ` en ${pais} ` : "";
  let precioElegido =
    precio !== "todos"
      ? `con un precio 
   ${price}`
      : "";
  let tamanoElegido =
    tamano !== "todos" ? ` en un hotel de tamaño ${tamano}.` : "";

  return (
    <div className="contTitle">
      <h1 className="title">Hoteles</h1>
      <h3>
        {busqueda}
        {fechaDeLLegada}
        {fechaDeSalida}
        {paisElegido}
        {precioElegido}
        {tamanoElegido}
        {/* {fechaErronea} */}
      </h3>
    </div>
  );
};
export default Title;
