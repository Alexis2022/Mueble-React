import React from "react"
import { Header } from "./components/header/Header";
import Main from "./components/main/Main";
import Mueble from "./paginas/Mueble";
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Mesa from "./paginas/Mesa";
import Sillas from "./paginas/Silla";
import VistaProducto from "./paginas/VistaProducto";
import Login from "./paginas/Login";
import { MostrarCart } from "./paginas/Cart";

function App() {



  return (
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sillones" element={<Mueble />} />
        <Route path="/mesa" element={<Mesa />} />
        <Route path="/sillas" element={<Sillas />} />
        <Route path="/producto/:prueba" element={<VistaProducto />} />
        <Route path="/cuenta" element={<Login />} />
        <Route path="/cart" element={<MostrarCart />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  )
}

export default App
