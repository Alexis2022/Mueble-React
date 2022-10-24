import React, {useState} from 'react'
import ProductoList from "../components/paginacion/ProductoList";
import producto from '../assets/imagenes/producto.jpg';
import producto2 from '../assets/imagenes/producto2.jpg';
import producto3 from '../assets/imagenes/producto3.jpg';
import producto4 from '../assets/imagenes/producto4.jpg';
import producto5 from '../assets/imagenes/producto5.jpg';
import producto6 from '../assets/imagenes/producto6.jpg';
import producto7 from '../assets/imagenes/producto7.jpg';
import producto8 from '../assets/imagenes/producto8.jpg';
import producto9 from '../assets/imagenes/producto9.jpg';
import producto10 from '../assets/imagenes/producto10.jpg';
import producto11 from '../assets/imagenes/producto11.jpg';
import producto12 from '../assets/imagenes/producto12.jpg';
import producto13 from '../assets/imagenes/producto13.jpg';
import producto14 from '../assets/imagenes/producto14.jpg';
import producto15 from '../assets/imagenes/producto15.jpg';
import producto16 from '../assets/imagenes/producto16.jpg';
import producto17 from '../assets/imagenes/producto17.jpg';
import producto18 from '../assets/imagenes/producto18.jpg';
import producto19 from '../assets/imagenes/producto19.jpg';
import producto20 from '../assets/imagenes/producto20.jpg';

function Mueble({titulos="Sillon"}) {

    const cantidad_page = 20;
    const [productos, setProductos] = useState([
  {
      id: 1,
      img: producto,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "750bs"
  },
  {
      id: 2,
      img: producto2,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "710bs"
  },
  {
      id: 3,
      img: producto3,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "660bs"
  },
  {
      id: 4,
      img: producto4,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "450bs"
  },
  {
      id: 5,
      img: producto5,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "100bs"
  },
  {
      id: 6,
      img: producto6,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "480bs"
  },
  {
      id: 7,
      img: producto7,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "330bs"
  },
  {
      id: 8,
      img: producto8,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "770bs"
  },
  {
      id: 9,
      img: producto9,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "900bs"
  },
  {
      id: 10,
      img: producto10,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "320bs"
  },
  {
      id: 11,
      img: producto11,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "620bs"
  },
  {
      id: 12,
      img: producto12,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "880bs"
  },
  {
      id: 13,
      img: producto13,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "220bs"
  },
  {
      id: 14,
      img: producto14,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "250bs"
  },
  {
      id: 15,
      img: producto15,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "390bs"
  },
  {
      id: 16,
      img: producto16,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "70bs"
  },
  {
      id: 17,
      img: producto17,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "980bs"
  },
  {
      id: 18,
      img: producto18,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "400bs"
  },
  {
      id: 19,
      img: producto19,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "630bs"
  },
  {
      id: 20,
      img: producto20,
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero eveniet quidem fuga, reiciendis, ducimus provident qui ipsa doloremque deserunt eaque accusamus voluptatum fugiat corrupti quis commodi dolorem eum quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam autem animi, quaerat laboriosam ex excepturi veritatis illum! At tempore temporibus quasi autem esse, veniam atque quisquam! Officiis dolorem iusto ex.",
      titulo: "mueble",
      precio: "480bs"
  },
    ]);

    const [items, setItems] = useState([...productos].splice(0, cantidad_page));
    const [current_page, setCurrent_page] = useState(0);

    let mostrar = cantidad_page === productos.length;

    const next = ()=>{
    let totalProductos = productos.length;
    const nextPagina = current_page + 1;
    const firstProductos = nextPagina * cantidad_page;
    if(firstProductos === totalProductos) return;

    setItems([...productos].splice(firstProductos, cantidad_page));
    setCurrent_page(nextPagina);
  }
  const prev = ()=>{
    const prevPagina = current_page - 1;
    if(prevPagina < 0) return;
    const firstProductos = prevPagina * cantidad_page;
    setItems([...productos].splice(firstProductos, cantidad_page));
    setCurrent_page(prevPagina);
  }

  return (
    <main className="main_producto">
        <ProductoList 
          imgs={items}
          prev={prev}
          next={next}
          titulo={titulos}
          page={cantidad_page}
          current={current_page}
          mostrar={mostrar}
        />
    </main>
  )
}

export default Mueble