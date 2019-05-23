import React, { Component } from 'react';  

import './App.css';
import Score from './Score';
import Game from './Game';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Game></Game>
        <Score></Score>
      </div>
    );
  }
}
  

export default App;
