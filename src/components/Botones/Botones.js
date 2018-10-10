import React, { Component } from 'react';
import '../Botones/Botones.css'

class Botones extends Component{
    render (){
        return (
            <div className="container">
  <div className="row">
    <div className="col-ls-12 fondo">
    <button type="button" className="btn btn-info verde">Entretención</button>
        <button type="button" className="btn btn-info cafe">Moda</button>
        <button type="button" className="btn btn-info grisazul">Computación y Ciencia</button>
        <button type="button" className="btn btn-info verdeintenso">Tecnologia</button>
        <button type="button" className="btn btn-info rosado">Arte</button>
        <button type="button" className="btn btn-info negro">Cocina</button>
        <button type="button" className="btn btn-info naranjo">Personas</button>
        <button type="button" className="btn btn-info violeta">Paisajes</button>
        <button type="button" className="btn btn-info autos">Autos y Motos</button>
        <button type="button" className="btn btn-info">Ciudad</button>
    </div>
   
  </div>
  
</div>
        );
    }
}

export default Botones ;