import React, { useState } from 'react';
import "../assets/style/cart.css";
import cartImg from "../assets/imagenes/producto.jpg";
import cartImg2 from "../assets/imagenes/producto2.jpg";
import cartImg3 from "../assets/imagenes/producto3.jpg";
import cartImg4 from "../assets/imagenes/producto4.jpg";
import cartImg5 from "../assets/imagenes/producto5.jpg";
import cartImg6 from "../assets/imagenes/producto6.jpg";
import cartImg7 from "../assets/imagenes/producto7.jpg";
import cartImg8 from "../assets/imagenes/producto8.jpg";
import cartImg9 from "../assets/imagenes/producto9.jpg";
import cartImg10 from "../assets/imagenes/producto10.jpg";
import cartImg11 from "../assets/imagenes/producto11.jpg";
import cartImg12 from "../assets/imagenes/producto12.jpg";
import cartImg13 from "../assets/imagenes/producto13.jpg";
import cartImg14 from "../assets/imagenes/producto14.jpg";
import cartImg15 from "../assets/imagenes/producto15.jpg";
import cartImg16 from "../assets/imagenes/producto16.jpg";
import cartImg17 from "../assets/imagenes/producto17.jpg";
import cartImg18 from "../assets/imagenes/producto18.jpg";
import cartImg19 from "../assets/imagenes/producto19.jpg";
import cartImg20 from "../assets/imagenes/producto20.jpg";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

function Cart({ eliminar }) {
    const producto = [
        {
            id: 1,
            img: cartImg,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "750bs"
        },
        {
            id: 2,
            img: cartImg2,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "710bs"
        },
        {
            id: 3,
            img: cartImg3,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "660bs"
        },
        {
            id: 4,
            img: cartImg4,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "450bs"
        },
        {
            id: 5,
            img: cartImg5,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "100bs"
        },
        {
            id: 6,
            img: cartImg6,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "480bs"
        },
        {
            id: 7,
            img: cartImg7,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "330bs"
        },
        {
            id: 8,
            img: cartImg8,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "770bs"
        },
        {
            id: 9,
            img: cartImg9,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "900bs"
        },
        {
            id: 10,
            img: cartImg10,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "320bs"
        },
        {
            id: 11,
            img: cartImg11,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "620bs"
        },
        {
            id: 12,
            img: cartImg12,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "880bs"
        },
        {
            id: 13,
            img: cartImg13,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "220bs"
        },
        {
            id: 14,
            img: cartImg14,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "250bs"
        },
        {
            id: 15,
            img: cartImg15,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "sillon",
            precio: "390bs"
        },
        {
            id: 16,
            img: cartImg16,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "70bs"
        },
        {
            id: 17,
            img: cartImg17,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "980bs"
        },
        {
            id: 18,
            img: cartImg18,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "400bs"
        },
        {
            id: 19,
            img: cartImg19,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "630bs"
        },
        {
            id: 20,
            img: cartImg20,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
            titulo: "silla",
            precio: "480bs"
        },
    ];

    let [modificarValor, setModificarValor] = useState(1);


    let valorMinimo = () => {
        let minimo = modificarValor === 1;
        minimo ? setModificarValor(modificarValor) : setModificarValor(modificarValor - 1);
    }
    let valorMaximo = () => {
        let minimo = modificarValor === 10;
        minimo ? setModificarValor(modificarValor = 10) : setModificarValor(modificarValor + 1);
    }





    return (
        <div className={"contenedor-cart"}>
            <div className="cart-img">
                <img src={producto[0].img} alt="" className="img-cart" />
            </div>
            <div className="cart-nombre">
                <span className="nombre-cart">{producto[0].titulo}</span>
            </div>
            <div className="cart-precio">
                <span className="precio-cart">{producto[0].precio}</span>
            </div>
            <div className="cart-cantidad">
                <input type="text" className="input-cart" value={modificarValor} onChange={e => setModificarValor(e.target.value)} readOnly />
                <div className="bt-cart cart-mas" onClick={valorMaximo}>+</div>
                <div className="bt-cart cart-menos" onClick={valorMinimo}>-</div>
            </div>
            <div className="cart-precio-total">
                <span className="precio-total-cart">750bs</span>
            </div>
            <div className="cart-borrar-icon" onClick={eliminar}>
                <FaRegTimesCircle />
            </div>
        </div>
    )
}


export function MostrarCart() {


    let [eliminar, setEliminar] = useState(false);
    let eliminarCarrito = () => {
        setEliminar(eliminar = true);
    }

    return (
        <main className="main-cart">
            <div className={eliminar ? "carrito-vacio" : "no-mostrar-carrito-vacio"}>
                <h3>Tu carrito esta vació</h3><div className="icon-no-registro">
                    <MdRemoveShoppingCart />
                </div>
            </div>
            <h3 className={"titulo-carrito"}>Carrito</h3>
            <div className={eliminar ? "eliminar-contenedor-principal-cart" : "contenedor-principal-cart"}>
                <div className="contenedor-nombres-cart">
                    <div className="nombres-cart-producto">
                        <span className="titulo-producto-cart">Producto</span>
                    </div>
                    <div className="nombres-cart-precio">
                        <span className="titulo-precio-cart">Precio</span>
                    </div>
                    <div className="nombres-cart-cantidad">
                        <span className="titulo-cantidad-cart">Cantidad</span>
                    </div>
                    <div className="nombres-cart-precio-total">
                        <span className="titulo-precio-total">Total</span>
                    </div>
                </div>
                <Cart
                    eliminar={eliminarCarrito}
                />
                <div className="contenedor-actualizador-precio">
                    <div className="actualizador">
                        <span className="texto-actualizador">Actualizar</span>
                    </div>
                    <div className="contenedor-precio-total">
                        <span className="texto-total">SubTotal</span>
                    </div>
                    <div className="contenedor-precio-cantidad">
                        <span className="precio-cantidad">750bs</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart