import React from "react";

export default function SinResultado(props) {
  let sinResultado =
    "No encontamos hoteles con tus criterios de busqueda pero tenemos muchas otras muy buenas opciones. ¡No te quedes sin tus merecidas vacaciones!";
  if ({ props } === "") {
    return sinResultado;
  }
 

  return (
    <>
      <h1 className="sinResultado">{sinResultado}</h1>
    </>
  );
}
