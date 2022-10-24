import React from 'react'
import '../../assets/style/productoD.css';

export function ProductosD({imagen, nombre, precio}) {
  return (
    <div className="caja-producto">
        <div className="producto-img">
            <img src={imagen} alt="" className='img-producto' />
        </div>
        <div className="producto-texto">
            <span className='texto-nombre'>{nombre}</span>
            <span className='texto-precio'>{precio}</span>
        </div>
    </div>
  )
}
