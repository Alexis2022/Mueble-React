import React from 'react'
import { Link } from 'react-router-dom';
import logoMueble from '../../assets/imagenes/logo.png';
import '../../assets/style/header.css'

function HeaderLogo() {
  return (
    <Link to="/">
      <div className="Header-logo">
        <img src={logoMueble} alt="" className='logo-header' />
      </div>
    </Link>
  )
}

export default HeaderLogo