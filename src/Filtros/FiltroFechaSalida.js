function FechaDeSalida(props) {
  return (
    <div>
      <h4 className="nombreFiltro">Check out:</h4>
      <input
        type="date"
        className="filters"
        value={props.salida}
        onChange={props.ManejarCambioSalida}
      />
    </div>
  );
}
export default FechaDeSalida;
// import { useState } from "react";
// function FechaDeSalida() {
//   let [fecha, actualizadorDeFecha] = useState("");

//   const ManejarCambio = (event) => {
//     actualizadorDeFecha(event.target.value);

//     const Tiempo = new Date(event.target.value);
//     const TiempoUnix = Tiempo.getTime();
//     const Año = Tiempo.getFullYear();
//     const Mes = Tiempo.getMonth() + 1;
//     const Dia = Tiempo.getDate() + 1;

//     // console.log("En tiempo unix  " + TiempoUnix);

//     // console.log("En new Date()  " + Tiempo);
//     // console.log("el año es: " + Año);
//     // console.log("el mes es: " + Mes);
//     // console.log("el dia es: " + Dia);

//     actualizarTiempoUnix(TiempoUnix);
//     actualizarAño(Año);
//     actualizarMes(Mes);
//     actualizarDia(Dia);
//     return TiempoUnix, Año, Mes, Dia;
//   };
//   let [TiempoUnix, actualizarTiempoUnix] = useState("0");
//   // console.log(TiempoUnix);
//   let [Año, actualizarAño] = useState("");
//   let [Mes, actualizarMes] = useState("");
//   let [Dia, actualizarDia] = useState("");
//   return (
//     <div>
//       <div>
//         TiempoUnix {TiempoUnix} Fecha: {Dia}/{Mes}/ {Año}{" "}
//       </div>
//       <input type="date" value={fecha} onChange={ManejarCambio} />
//     </div>
//   );
// }
// export default FechaDeSalida;
