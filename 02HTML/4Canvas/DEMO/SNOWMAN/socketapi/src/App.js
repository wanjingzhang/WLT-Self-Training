import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timestamp: 'no timestamp yet',
      rankings: { name: "xxx", score: 10 },
    }

    this.subscribeToTimer = this.subscribeToTimer.bind(this);
  }

  subscribeToTimer = ((err, rankings) => this.setState({
      rankings
    }));

  render() {
    let { rankings } = this.state;
    return (
      <div className="App">
        <p className="App-intro">
          {/* Current ranking: {this.state.rankings} */}
          {
            console.log(rankings)
          }
        </p>
        <div>
          name:
          <input id="name" ></input><br />
          score:
          <input id="score" ></input><br />
          <span onClick={() => {
            this.subscribeToTimer({ name: "xxx", score: 10 });
          }}>Add one data</span>
        </div>
      </div>
    );
  }
}
  

export default App;
