import React, { useState } from "react";
import imagen0 from "./qtaiasendooe.jpg"; // Ruta de la imagen para 0%
import imagen25 from "./gatoduda.jpg"; // Ruta de la imagen para 25%
import imagen50 from "./catLap.jpg"; // Ruta de la imagen para 50%
import imagen75 from "./gatoSorprendio.jpg"; // Ruta de la imagen para 75%
import imagen100 from "./indicafien.jpg"; // Ruta de la imagen para 100%

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

  const obtenerImagen = () => {
    if (cont === 0) return imagen0;
    else if (cont === 25) return imagen25;
    else if (cont === 50) return imagen50;
    else if (cont === 75) return imagen75;
    else return imagen100;
  };

  const estiloImagen = {
    maxWidth: "100%", // Establece el ancho máximo de la imagen al 100% del contenedor
    height: "auto", // Hace que la altura se ajuste automáticamente para mantener la proporción
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div>El contador es: {cont}%</div>
        <img src={obtenerImagen()} alt={`Imagen al ${cont}%`} style={estiloImagen} />
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {cont < 100 ? (
          <button onClick={incrementar}>Incrementar</button>
        ) : (
          <button disabled>Incrementar</button>
        )}
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={reiniciar}>Reiniciar el contador</button>
      </div>
    </div>
  );
}
