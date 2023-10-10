import React from 'react';

import Informacion1 from '../organismos/InfoFifa';
import Fifa from '../../img/fifa.jpg'
import '../../css/App.css';
import '../../css/Cards.css';

const Datos = {
 
    
    
  Informacion1: [
    {
      imagenSrc: Fifa,
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
        <Informacion1 {...Datos.Informacion1[0]} /> 
      </section>
      <br/> <br/> <br/>
    </main>
  );
}

export default Principal;