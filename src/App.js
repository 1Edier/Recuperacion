import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MinecraftPage from './components/pages/Minecraft';
import PaginaPrincipal from './components/pages/Principal';
import Fifa from './components/pages/Fifa';
import HaloPage from './components/organismos/InfoFifa'; // Importa la página Halo
import NavBar from './components/moleculas/NavBar';
import Logo from './img/logo.png';
import Carrito from './img/carrito.png';
import './css/App.css';

const Datos = {
  NavBar: [
    {
      logosrc: Logo,
      logoWidth: "170",
      logoHeight: "110",
      titulo: "Tienda-Online",
      className: "boton4",
    },
    {
      logosrc: Carrito,
      logoWidth: "110",
      logoHeight: "70",
      className: "card-btn1",
      text: "modo oscuro",
    },
  ],
};

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <Router>
      <div className={`App ${modoOscuro ? 'modo-oscuro' : ''}`}>
        <NavBar datos={Datos.NavBar} toggleModoOscuro={toggleModoOscuro} />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          
          {/* Agrega una ruta dinámica para Halo */}
          <Route path="/:titulo" element={<HaloPage />} />
          <Route path="/minecraft" element={<MinecraftPage />} />
          <Route path="/fifa22" element={<Fifa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
