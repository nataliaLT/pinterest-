import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';
import '../Imagenes/Imagenes.css'

class Imagenes extends Component {
    render () {
        return (
          <StackGrid
           columnWidth = { 150 }
          > 
           <div key = " key1 ">Hola</div> 
           <div key = " key2 ">Hola</div> 
           <div key = " key3 ">Hola</div> 
         </StackGrid>
       );
     }
}

export default Imagenes; 