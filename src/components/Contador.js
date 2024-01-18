import React, { useState } from "react";

export function Contador() {
  const [cont, setCont] = useState(0);

  function incrementar() {
    if (cont < 100) {
      setCont(cont + 25);
    }
  }

  function decrementar() {
    if (cont > 0) {
      setCont(cont - 25);
    }
  }

  function reiniciar() {
    setCont(0);
  }

  return (
    <>
      <div>El contador es: {cont}%</div>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar </button>
      <button onClick={reiniciar}>Reiniciar el contador</button>
    </>
  );
}
