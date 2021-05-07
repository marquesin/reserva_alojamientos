import React from "react";
export default function Pasado(props, { salida, llegada }) {
  var pasado = `Colocaste una fecha errónea ya que tu fecha de entrada no puede ser posterior a la fecha de salida del hotel. Inténtalo de nuevo.`;

  if (llegada !== "" && salida !== "" && llegada > salida) {
    return Pasado;
  }
  return <h1>{pasado}</h1>;
}
