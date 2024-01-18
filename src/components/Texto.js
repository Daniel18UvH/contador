import React, { useState } from "react";

export function Texto() {
  const [texto, setTexto] = useState("encendido");

  function switch2() {
    if (texto === "encendido") {
      setTexto("Apagado");
    } else {
      setTexto("encendido");
    }
  }

  return (
    <>
      <div>{texto}</div>
      <button onClick={switch2}>{texto}</button>
    </>
  );
}
