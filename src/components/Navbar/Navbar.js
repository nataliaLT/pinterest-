import React from 'react';
import logo from "../../imagenes/pinterest-logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-light bg-withe">
        <img className="imagen" src={logo}/>
  <form className="form-inline">
  <input type="Seach" className="form-control busqueda" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Buscar" style={{width: '800px'}}/>
  </form>
  <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active inicio" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Siguiendo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Natalia</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Mensaje</a>
  </li>
</ul>
</nav>
</div>
 )
}

export default Navbar;