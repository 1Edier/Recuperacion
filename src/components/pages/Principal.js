import React from 'react';

import Card from '../moleculas/Cards';
import '../../css/App.css';
import '../../css/Cards.css';

import Clash from '../../img/clash.webp';
import Halo from '../../img/Halo.jpeg';
import Surfers from '../../img/surfers.jpg';
import Minecraft from '../../img/minecraft.webp';
import Andreas from '../../img/san_andreas.jpeg';
import Fifa from '../../img/fifa.jpg';
import Mortal from '../../img/mortal.jpeg';
import Resident from '../../img/resident.jpeg';

const Datos = {
  
   
    Cards: [
      
    {
      imagenSrc:Clash ,
      imagenWidth: "250",
      imagenHeight: "350",
    
      titulo: "Clash Royale",
      className:"card-btn",
    },
    {
      imagenSrc: Halo,
      imagenWidth: "250",
      imagenHeight: "350",
     
      className:"card-btn", 
      titulo: "HALO(The master chief)",
    },
    {
      imagenSrc: Surfers,
      imagenWidth: "250",
      imagenHeight: "350",
      className:"card-btn",
      titulo: "Subway Surf",
    },
    {
      imagenSrc: Minecraft,
      imagenWidth: "250",
      imagenHeight: "350",
      className:"card-btn",
      titulo: "Minecraft",
    },
    {
      imagenSrc: Andreas,
      imagenWidth: "250",
      imagenHeight: "350",
      className:"card-btn",
      titulo: "San Andreas",
    },
    {
      imagenSrc: Fifa ,
      imagenWidth: "250",
      imagenHeight: "350",
      className:"card-btn",
      titulo: "FIFA22",
    },
    {
      imagenSrc: Mortal,
      imagenWidth: "250",
      imagenHeight: "350",
      className:"card-btn",
      titulo: "Mortal Kombat II",
    },
    {
      imagenSrc: Resident,
      imagenWidth: "250",
      imagenHeight: "350",
      className:"card-btn",
      titulo: "Resident Evil 3",
    },
  ],
};


function Principal() {
  return (
  
    
      <section className="product-card-container">
        {Datos.Cards.map((card, index) => (
          <Card key={index} {...card} url={`/informacion/${index}`} />
        ))}
       
      </section>
      
   
  );
}

export default Principal;