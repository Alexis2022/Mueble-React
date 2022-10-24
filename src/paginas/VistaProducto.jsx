import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import imagen from '../assets/imagenes/producto.jpg';
import imagen2 from '../assets/imagenes/producto2.jpg';
import imagen3 from '../assets/imagenes/producto3.jpg';
import imagen4 from '../assets/imagenes/producto4.jpg';
import imagen5 from '../assets/imagenes/producto5.jpg';
import imagen6 from '../assets/imagenes/producto6.jpg';
import imagen7 from '../assets/imagenes/producto7.jpg';
import imagen8 from '../assets/imagenes/producto8.jpg';
import imagen9 from '../assets/imagenes/producto9.jpg';
import imagen10 from '../assets/imagenes/producto10.jpg';
import imagen11 from '../assets/imagenes/producto11.jpg';
import imagen12 from '../assets/imagenes/producto12.jpg';
import imagen13 from '../assets/imagenes/producto13.jpg';
import imagen14 from '../assets/imagenes/producto14.jpg';
import imagen15 from '../assets/imagenes/producto15.jpg';
import imagen16 from '../assets/imagenes/producto16.jpg';
import imagen17 from '../assets/imagenes/producto17.jpg';
import imagen18 from '../assets/imagenes/producto18.jpg';
import imagen19 from '../assets/imagenes/producto19.jpg';
import imagen20 from '../assets/imagenes/producto20.jpg';
import "../assets/style/vistaProducto.css";


function VistaProducto() {

    const producto = [
        {
            id: 1,
            img: imagen,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "750bs"
        },
        {
            id: 2,
            img: imagen2,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "710bs"
        },
        {
            id: 3,
            img: imagen3,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "660bs"
        },
        {
            id: 4,
            img: imagen4,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "450bs"
        },
        {
            id: 5,
            img: imagen5,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "100bs"
        },
        {
            id: 6,
            img: imagen6,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "480bs"
        },
        {
            id: 7,
            img: imagen7,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "330bs"
        },
        {
            id: 8,
            img: imagen8,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "770bs"
        },
        {
            id: 9,
            img: imagen9,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "900bs"
        },
        {
            id: 10,
            img: imagen10,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "320bs"
        },
        {
            id: 11,
            img: imagen11,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "620bs"
        },
        {
            id: 12,
            img: imagen12,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "880bs"
        },
        {
            id: 13,
            img: imagen13,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "220bs"
        },
        {
            id: 14,
            img: imagen14,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "250bs"
        },
        {
            id: 15,
            img: imagen15,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "sillon",
            precio: "390bs"
        },
        {
            id: 16,
            img: imagen16,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "70bs"
        },
        {
            id: 17,
            img: imagen17,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "980bs"
        },
        {
            id: 18,
            img: imagen18,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "400bs"
        },
        {
            id: 19,
            img: imagen19,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "630bs"
        },
        {
            id: 20,
            img: imagen20,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "480bs"
        },
    ];
    const {prueba} = useParams(); 

    let [valorModificar, setValorModificar] = useState(1);
    let [imagenes, setImagenes] = useState(producto[prueba].img);

    let cambiar = ()=>{
        setImagenes(imagenes = imagen);
    }
    let cambiar2 = ()=>{
        setImagenes(imagenes = imagen2);
    }
    let cambiar3 = ()=>{
        setImagenes(imagenes = imagen3);
    }
    let cambiar4 = ()=>{
        setImagenes(imagenes = imagen4);
    }

    let valorMinimo = () => {
        let minimo = valorModificar === 1;
        minimo ? setValorModificar(valorModificar) : setValorModificar(valorModificar - 1);
    }
    let valorMaximo = () => {
        let minimo = valorModificar === 10;
        minimo ? setValorModificar(valorModificar = 10) : setValorModificar(valorModificar + 1);
    }

    return (
        <>
            <div className="contenedor-raiz">
                <Link to="/" className='destino-enlaces'>Inicio</Link>
                <span>  / </span>
                <Link to="/sillones" className='destino-enlaces'>Sillon</Link>
            </div>
            <div className="contendor-flex">
                <div className="contendor-imgs">
                    <div className="contendor-principal-img">
                        <img src={imagenes} alt="" className="principal-img" />
                    </div>
                    <div className="contenedor-bajo-imgs">
                        <img src={imagen} alt="" className="bajo-img" onClick={cambiar} />
                        <img src={imagen2} alt="" className="bajo-img" onClick={cambiar2} />
                        <img src={imagen3} alt="" className="bajo-img" onClick={cambiar3} />
                        <img src={imagen4} alt="" className="bajo-img" onClick={cambiar4} />
                    </div>
                </div>
                <div className='contendor-informacion-principal'>
                    <div className='contenedor-titulo'>
                        <span className="producto-titulo">{producto[prueba].titulo}</span>
                    </div>
                    <div className='contenedor-precio'>
                        <span>{producto[prueba].precio}</span>
                    </div>
                    <div className='contenedor-informacion'>
                        <span className="informacion-texto">{producto[prueba].descripcion}</span>
                    </div>
                    <div className='contenedor-boton-cantidad'>
                        <input type="text" className="cantidad-input" value={valorModificar} onChange={e => setValorModificar(e.target.value)} readOnly />
                        <div className="bt-mas bt" onClick={valorMaximo}>+</div>
                        <div className="bt-menos bt" onClick={valorMinimo}>-</div>
                    </div>
                    <div className='contenedor-añadir-carrito'>
                        <button className="bt-añadir">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VistaProducto