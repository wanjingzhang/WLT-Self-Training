import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer, getInitData } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timestamp: 'no timestamp yet',
      rankings: null,
      id:1,
    }

    getInitData((rankings) => { 
      this.setState({ rankings });
    });
 
  }

  subscribeToTimer = ( (obj,cb) => { 
    console.log('this.subscribeTotimer 2 rankings:' , cb);
  });

  render() {
    let { rankings ,id} = this.state;
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
            this.setState({
              id:id++
            })
            subscribeToTimer({ name: "xxx", score: id }, (rankings) => {
              console.log('call back', rankings);
              this.setState({ rankings})
            });
          }}>Add one data</span>
        </div>
      </div>
    );
  }
}
  

export default App;
