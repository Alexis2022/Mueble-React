import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaWeightHanging } from "react-icons/fa";
import "../../assets/style/header.css";
import {Link} from "react-router-dom";

function HeaderNav({ responsive }) {

    const [mostrar, setMostrar] = useState(true);
    const mostrarse = () => {
        mostrar ? setMostrar(false) : setMostrar(true);
    }

    return (
            <nav className={responsive ? "nav-responsive" : "nav"}>
                <ul className={responsive ? mostrar ? "nav-ul-responsive" : "nav-ul-responsive activo" : "nav-ul"}  >
                    <input type="text" className="nav-ul-input" placeholder="Buscar..." />
                    <li className={responsive ? "nav-li-responsive" : "nav-li"}>
                        <Link to="/" className={responsive ? "li-a-responsive" : "li-a"} onClick={mostrarse}>INICIO</Link>
                    </li>
                    <li className={responsive ? "nav-li-responsive" : "nav-li"}>
                        <Link to="/sillones" className={responsive ? "li-a-responsive" : "li-a"} onClick={mostrarse}>SILLONES</Link>
                    </li>
                    <li className={responsive ? "nav-li-responsive" : "nav-li"}>
                        <Link to="/sillas" className={responsive ? "li-a-responsive" : "li-a"} onClick={mostrarse}>SILLAS</Link>
                    </li>
                    <li className={responsive ? "nav-li-responsive" : "nav-li"}>
                        <Link to="/mesa" className={responsive ? "li-a-responsive" : "li-a"} onClick={mostrarse}>MESA</Link>
                    </li>
                </ul>
                <Link to="/cuenta" className="nav-a-icon">
                    <FaUser className="icon-usuario" />
                </Link>
                <Link to="/cart" className="nav-a-icon">
                    <FaWeightHanging className="icon-cart" />
                    <div className="header-cantidad-cart">1</div>
                </Link>
                <FaBars className="icon-menu" onClick={mostrarse} />
            </nav>
    )
}

export default HeaderNav