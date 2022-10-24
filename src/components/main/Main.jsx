import React from "react";
import Slider from "./Slider";
import Productos from "./Productos";
import PruductosDestacado from "./Productos-destacado";

function Main() {
  return (
      <main>
          <Slider />
          <Productos />
          <PruductosDestacado 
          titulo = "Porductos Destacado"
          />
      </main>
  )
}

export default Main