import React from 'react'
import tarjeta from "../../assets/imagenes/tarjeta.webp";
import tarjeta2 from "../../assets/imagenes/tarjeta2.webp";
import tarjeta3 from "../../assets/imagenes/visa.webp";
import tarjeta4 from "../../assets/imagenes/master-cart.webp";
import tarjeta5 from "../../assets/imagenes/paypal.webp";
import "../../assets/style/footer.css"

function footerInferior() {
  return (
    <div className="footer-inferiror">
        <div className="footer-img">
            <img src={tarjeta} alt="" />
            <img src={tarjeta2} alt="" />
            <img src={tarjeta3} alt="" />
            <img src={tarjeta4} alt="" />
            <img src={tarjeta5} alt="" />
        </div>
        <div className="contenedor-creador">
            <span className='creador-pagina'>Copyright ©2022 todos los derechos reservados | Desarrollado por <a href="https://soy-erwin.com" className="creador-a" target={"_blank"}>SrSpes</a></span>
        </div>
        <div className="contenedor-creador">
            <span>Imagenes de: <a href="https://unsplash.com/" className="creador-a" target={"_blank"}>unsplash</a></span>
        </div>
    </div>
  )
}

export default footerInferior