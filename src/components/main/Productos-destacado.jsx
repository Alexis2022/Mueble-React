import React from 'react';
import '../../assets/style/productoD.css';
import Mueble from '../../paginas/Mueble';

function PruductosDestacado({titulo}) {
    return (
        <>
            <div className="contenedor-productos-destacado">
                <Mueble 
                titulos='Porductos Destacado'/>
            </div>
        </>
    )
}

export default PruductosDestacado