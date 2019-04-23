import React, { Component } from 'react';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import GridItem from './Grid/GridItem';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';

import facts from './NASA_facts.json';

//styles
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts,
    }
  }
  updateClicked(id) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.facts[id].clicked = true;
    this.setState(stateCopy);
  }
  render() {
    return (
      <div className={styles.app}> 
        <Title />
        <Background />
        <Grid facts={this.state.facts} updateClicked={this.updateClicked.bind(this)}/>
        <Rocket />
        <Smoke />
      </div>
    )
  }
}

export default App;
