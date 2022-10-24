import React from "react";
import "../../assets/style/productos.css";
import { MdChair } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { GiTable } from "react-icons/gi";
import { GiDeskLamp } from "react-icons/gi";


function Productos() {
  return (
    <div className="productos-icon">
        <h1 className="titulo-productos">Productos</h1>
        <div className="contenedor-icon-productos">
            <div className="contenedor-icon">
                <MdChair className="icon-producto" />
                <span className="icon-texto">sillon</span>
            </div>
            <div className="contenedor-icon">
                <GiOfficeChair className="icon-producto" />
                <span className="icon-texto">silla</span>
            </div>
            <div className="contenedor-icon">
                <IoBed className="icon-producto" />
                <span className="icon-texto">cama</span>
            </div>
            <div className="contenedor-icon">
                <GiTable className="icon-producto" />
                <span className="icon-texto">mesa</span>
            </div>
            <div className="contenedor-icon">
                <GiDeskLamp className="icon-producto" />
                <span className="icon-texto">lampara</span>
            </div>
        </div>
    </div>
  )
}

export default Productos