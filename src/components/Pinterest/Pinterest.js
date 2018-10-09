import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import Botones from "../Botones/Botones";
import Imagenes from '../Imagenes/Imagenes';

class Pinterest extends Component {
    render(){
        return (
            <div>
            <Navbar />
            <Botones />
            <Imagenes />
            </div>
        )
    }
}

export default Pinterest;