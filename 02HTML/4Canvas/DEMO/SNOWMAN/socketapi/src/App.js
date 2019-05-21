import React,{Component} from 'react'; 
import './App.css';
import { subscribeToTimer, getInitData } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      rankings: null, 
      obj:{},
    }

    // 初始化数据列表
    getInitData((rankings) => { 
      this.setState({ rankings });
    });
 
    this.handleChange = this.handleChange.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
  }

  subscribeToTimer = ( (obj,cb) => { 
    console.log('this.subscribeTotimer 2 rankings:' , cb);
  });

  handleChange(event) {
    this.setState({ obj: { name:  event.target.value ,score: this.state.obj.score } });
  }

  handleScoreChange(event) {
    this.setState({ obj: { score: event.target.value, name: this.state.obj.name } });
  }

  render() {
    let { rankings,obj } = this.state;
    return (
      <div className="App">
        <p className="App-intro"> <ul>
          {rankings != null?rankings.map((item,id) =>{
            return (<li key={id}>{item.name}:{item.score}</li>)
          }
          ):null}
        </ul></p>
        <form>
          name:
          <input id="name" type="text" maxLength="10" onChange={this.handleChange} ></input><br />
          score:
          <input id="score" type="tel" maxLength="10" onChange={this.handleScoreChange}></input><br />
          <span onClick={() => { 
            subscribeToTimer({ name:obj.name,score: obj.score }, (rankings) => {
              console.log('call back', rankings);
              this.setState({ rankings})
            });
          }}>Add one data</span>
        </form>
      </div>
    );
  }
}
  

export default App;
