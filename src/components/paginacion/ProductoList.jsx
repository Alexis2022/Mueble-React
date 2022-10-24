import "../../assets/style/productoD.css";
import {Link} from "react-router-dom";



function ProductoList({prev, next, imgs, titulo, mostrar}) {

    const image = imgs.map((img, i)=>{
        return <>
        <div className="caja-producto">
            <Link to={`/producto/${i}`}>
                <div className="producto-img">
                    <img src={img.img} alt="" className='img-producto' />
                </div>
            </Link>
            <div className="producto-texto">
                <span className='texto-nombre'>{img.titulo}</span>
                <span className='texto-precio'>{img.precio}</span>
            </div>
        </div>
        </>
    });
    


  return (<>
    <h3>{titulo}</h3>
    <div className="contenedor-productos-destacado">
        {image}
    </div>
    <div className={mostrar ? "noMostrar" : "caja-bt"}>
        <button onClick={prev} > {"<"} </button>
        <button onClick={next}> {">"} </button>
    </div>
    </>
  )
}

export default ProductoList