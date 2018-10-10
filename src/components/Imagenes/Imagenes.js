import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';
import '../Imagenes/Imagenes.css'
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class Imagenes extends Component {
  state = {
    open:false,
    currentImg: ''
  }

  handleOpen= img => {
    this.setState({open: true, currentImg: img});
  }

  handleClose = () => {
    this.setState({open: false});
  }
    render () {
      let listaImagenes;
      const {images} = this.props;
      //En caso de que si existen imagenes
      if(images){
        listaImagenes = (
            <StackGrid columnWidth={300}>
            {images.map(img => (
              <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon = {
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <ZoomIn color="white"></ZoomIn>
                </IconButton>
              }
              >
                <img src={img.largeImageURL} alt="" className="imagenes"/>
              </GridTile> 
            ))}

            </StackGrid>
        )

      }else {
        //En caso de que no existan imagenes
        listaImagenes = null;
      }
      const actions = [
        <FlatButton label="close" primary={true} onClick={this.handleClose} />
      ]
        return (
         <div>
           {listaImagenes}
           <Dialog 
             actions={actions}
             modal={false}
             open={this.state.open}
             onRequestClose={this.handleClose}>
              <img src={this.state.currentImg} alt="" style={{width: '100%'}}/>
             </Dialog>
           
         </div>
       );
     }
}

Imagenes.propTypes = {
  images: PropTypes.array.isRequired
}
export default Imagenes; 