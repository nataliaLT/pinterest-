import React, {Component} from 'react';
import logo from "../../imagenes/pinterest-logo.png";
import "./Navbar.css";
import axios from 'axios';
import Imagenes from '../Imagenes/Imagenes';

class Navbar extends Component {
  constructor(){
  super()
    this.state= {
      buscarText: "",
      amount:20,
      apiUrl: "https://pixabay.com/api",
      apiKey: "10339641-19e47630f400dbc2b80d327ec",
      imagenes: []
  }
  console.log(this.state)
  }
   //Función que me permite habilitar mi input de busqueda
   onTextChange = e => {
     this.setState({[e.target.name]: e.target.value}, ()=>{
       axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.buscarText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
       .then(res => this.setState({imagenes: res.data.hits}))
       .catch(err=> console.log(err));
     }
    );
   };

  render(){
    console.log(this.state.imagenes)
    return (
        <div>
        <nav className="navbar navbar-light bg-withe">
        <img className="imagen" src={logo}/>
  <form className="form-inline">
  <input type="Seach" name="buscarText" value={this.state.buscarText} onChange={this.onTextChange} fullWidth={true} className="form-control busqueda" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Buscar" style={{width: '800px'}}/>
  </form>
  <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active inicio" href="#">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Siguiendo</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Natalia</a>
  </li>
  <li className="nav-item">
  </li>
</ul>
</nav>
{this.state.imagenes.length>0?$(<Imagenes imagenes={this.state.imagenes}/>): null}
</div>
 )
}
}

export default Navbar;