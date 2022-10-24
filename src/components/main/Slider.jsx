import React, { useState, useEffect} from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import slider from "../../assets/imagenes/slider.jpg";
import slider2 from "../../assets/imagenes/slider2.jpg";
import slider3 from "../../assets/imagenes/slider3.jpg";
import "../../assets/style/slider.css"



function Slider() {

    const contenedorSlider = [slider, slider2, slider3];

    const [imagenActual, setImagenActual] = useState(0);
    const cantidadImg = contenedorSlider?.length;

    useEffect(()=>{
        const auto = setInterval(()=>{
            Next();
        }, 5000);

        return ()=> clearInterval(auto);
    });

    const Next = ()=>{
        setImagenActual(imagenActual == cantidadImg - 1 ? 0 : imagenActual + 1)
    }
    const Prev = ()=>{
        setImagenActual(imagenActual == 0 ? cantidadImg - 1 : imagenActual - 1)
    }

    return (
        <div className="contenedor-slider">
            <div className="slider">
                <div className='slider-img' >
                    {contenedorSlider.map((imagen, index) => {
                        return(
                            <> 
                                {imagenActual == index &&(
                                    <img key={index} src={imagen} className="img-slider"  />
                                )}
                            </>
                        ) 
                    })
                    }
                </div>
            </div>
            <div className="contenedor-flecha flecha-derecha">
                <FaChevronRight onClick={Next} />
            </div>
            <div className="contenedor-flecha flecha-izquierda">
                <FaChevronLeft onClick={Prev} />
            </div>
        </div>
  )
}

export default Slider