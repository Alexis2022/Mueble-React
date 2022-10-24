import React from 'react';
import "../../assets/style/footer.css";
import FooterSuperior from "./FooterSuperior";
import FooterInferior from './FooterInferior';

function Footer() {
  return (
    <footer>
      <div className="footer-flex">
        <FooterSuperior 
        titulo="Producto"
        li1="Cama"
        li2="Silla"
        li3="Sillones"
        li4t={true}
        li4="Escritorios"
        />
        <FooterSuperior 
        titulo="Nosotros"
        li1="Acerca de"
        li2="Mi cuenta"
        li3="Contacto"
        li4t={false}
        />
        <FooterSuperior 
        titulo="Politica"
        li1="Politica de privacidad"
        li2="Politica de envio"
        li3="Politica de devolucion"
        li4t={false}
        />
        <FooterSuperior 
        titulo="Hablanos"
        li1="soyerwin@gmail.com"
        li2="591 71285645"
        li4="jaja"
        li3="10:00 a 16:00, Lunes - Viernes"
        li4t={false}
        />
        </div>
        <FooterInferior />
    </footer>
  )
}

export default Footer