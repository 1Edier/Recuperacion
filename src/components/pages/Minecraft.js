import React from 'react';

import Informacion from '../organismos/InfoMinecraft';

import '../../css/App.css';
import '../../css/Cards.css';

const Datos = {
 
    
    
  Informacion: [
    {
      imagenSrc: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/guia-todos-trucos-consejos-minecraft.jpg?tf=3840x",
      logoWidth: "700",
      logoHeight: "500",
      contenido: [
        {
          titulo: "Minecraft",
          parrafo: "Minecraft es un videojuego tipo sandbox, su traducción literal sería “caja de arena” y es lo que representa la experiencia de juego. Los jugadores pueden modelar el mundo a su gusto, destruir y construir, como si estuviesen jugando en una caja de arena.",
        },
        {
          titulo: "Popular",
          parrafo: "Minecraft es un juego muy popular hoy en dia ",
        },
      ],
    },
  ],
};
function Principal() {
  return (
    <main>
    
      <section className="product-card-container">
        <Informacion {...Datos.Informacion[0]} /> 
      </section>
      <br/> <br/> <br/>
    </main>
  );
}

export default Principal;