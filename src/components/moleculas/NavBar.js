import React from 'react';
import Logo from '../atoms/Imagen';
import Titulo from '../atoms/Titulo';
import Boton from '../atoms/Boton';

export default function NavBar(props) {
  return (
    <div className='nav'>
      {props.datos.map((item, index) => (
        <div key={index} className='logo-text-container'>
          <Logo logosrc={item.logosrc} logoWidth={item.logoWidth} logoHeight={item.logoHeight} />
          <Titulo titulo={item.titulo} />
          <Boton className={item.className} text={item.text} onClick={props.toggleModoOscuro} />
        </div>
      ))}
    </div>
  );
}
