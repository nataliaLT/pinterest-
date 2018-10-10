import React, { Component } from 'react';
import './App.css';
import Pinterest from '../src/components/Pinterest/Pinterest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
       <Pinterest />
       </MuiThemeProvider>
      
    );
  }
}

export default App;
