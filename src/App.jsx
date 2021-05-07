import "./styles.css";
import { useState } from "react";
import HotelList from "./Hotel.jsx";
import Title from "./Title.js";
import { hotelsData, today } from "./hoteles.js";
import FiltroPais from "./Filtros/FiltroPais.js";
import FiltroPrecio from "./Filtros/FiltroPrecio.js";
import FiltroTamano from "./Filtros/FiltroTamano.js";
import FechaDeLlegada from "./Filtros/FiltroFechaLlegada.js";
import FechaDeSalida from "./Filtros/FiltroFechaSalida.js";
import SinResultado from "./Filtros/SinResultado.jsx";
import FiltroReset from "./Filtros/FiltroReset.js";
import Pasado from "./Filtros/Pasado.js";

export default function App() {
  const hoteles = hotelsData;
  const [pais, actualizarPais] = useState("todos");
  const [precio, actualizarPrecio] = useState("todos");
  const [tamano, actualizarTamano] = useState("todos");
  const [llegada, actualizarLlegada] = useState("");
  const [salida, actualizarSalida] = useState("");
  const [reset, actualizarReset] = useState("");

  const manejarReset = (event) => {
    actualizarReset(
      actualizarPais("todos"),
      actualizarPrecio("todos"),
      actualizarTamano("todos"),
      actualizarLlegada(""),
      actualizarSalida("")
    );
  };
  const manejarCambioPais = (event) => {
    actualizarPais(event.target.value);
  };
  const manejarCambioPrecio = (event) => {
    actualizarPrecio(event.target.value);
  };
  const manejarCambioTamano = (event) => {
    actualizarTamano(event.target.value);
  };
  const manejarCambioLlegada = (event) => {
    actualizarLlegada(event.target.value);
  };
  const manejarCambioSalida = (event) => {
    actualizarSalida(event.target.value);
  };
  let filtroLlegada = new Date(llegada + "T00:00");
  let filtroSalida = new Date(salida + "T00:00");
  const crearLista = () => {
    const nuevaLista = hoteles
      .filter((hotel) => {
        if (llegada !== "" && salida !== "") {
          return (
            filtroLlegada.getTime() <= hotel.availabilityFrom &&
            filtroSalida.getTime() <= hotel.availabilityTo &&
            filtroLlegada.getTime() <= filtroSalida.getTime() &&
            filtroLlegada.getTime() > today &&
            hotel.availabilityFrom > today
          );
        }

        return hotel;
      })
      .filter((hotel) => {
        if (pais !== "todos") {
          return hotel.country === pais;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (precio !== "todos") {
          let numero = parseInt(precio, 10);
          return hotel.price == numero;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (tamano !== "todos") {
          if (tamano === "pequeño") {
            return hotel.rooms <= 10;
          } else if (tamano === "mediano") {
            return hotel.rooms > 10 && hotel.rooms <= 20;
          } else if (tamano === "grande") {
            return hotel.rooms > 20;
          }
        }
        return hotel;
      });

    return nuevaLista;
  };
  let nuevaLista = crearLista();
  const ListHotel = nuevaLista.map((Cards) => (
    <HotelList
      key={Cards.name}
      photo={Cards.photo}
      name={Cards.name}
      alt={Cards.alt}
      description={Cards.description}
      city={Cards.city}
      country={Cards.country}
      rooms={Cards.rooms}
      price={Cards.price}
    />
  ));
  return (
    <div className="App">
      <>
        <Title
          llegada={llegada}
          salida={salida}
          pais={pais}
          precio={precio}
          tamano={tamano}
        />

        <div className="contentFiltros">
          <div className="Filtros">
            <FechaDeLlegada
              ManejarCambioLlegada={manejarCambioLlegada}
              llegada={llegada}
            />
            <FechaDeSalida
              ManejarCambioSalida={manejarCambioSalida}
              salida={salida}
            />
            <FiltroPais manejarCambioPais={manejarCambioPais} pais={pais} />
            <FiltroPrecio
              manejarCambioPrecio={manejarCambioPrecio}
              precio={precio}
            />
            <FiltroTamano
              manejarCambioTamano={manejarCambioTamano}
              tamano={tamano}
            />
            <FiltroReset Resetear={manejarReset} reset={reset} />
          </div>
        </div>
        <div className="lista">{ListHotel}</div>
        {llegada !== "" && salida !== "" && llegada > salida ? (
          <div className="contSinResultado">
            <Pasado llegada={llegada} salida={salida}></Pasado>
          </div>
        ) : ListHotel == "" ? (
          <div className="contSinResultado">
            <SinResultado props={ListHotel} />{" "}
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
}
