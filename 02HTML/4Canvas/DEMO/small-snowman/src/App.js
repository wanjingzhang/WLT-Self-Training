import React, { Component } from 'react';  

import './App.css';
import Score from './lib/Score';
import Game from './Game';
import Note from './lib/Note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalWidth: 0,
      originalHeight: 0,
      isLandscape: null,
      isMobile: null,
      isAndroid: null, 
    }
  }

  componentDidMount() {
    // 获取初始宽高
    this.setState({
      originalWidth: window.innerWidth,
      originalHeight: window.innerHeight,
    });

    // 
    let isMobile = window.innerWidth <= 640 ? true : false;
    let isLandscape = window.matchMedia('(orientation: landscape)');
    isLandscape = isLandscape.matches;

    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

    this.setState({ isLandscape });
    this.setState({ isMobile });
    this.setState({ isAndroid });
    console.log('isMobile:' + isMobile);
    console.log('isLandscape:' + isLandscape);
    window.addEventListener('resize', this.handleResize);
  }

  // 改变窗口大小
  handleResize = () => {
    console.log('handleResize');  
    let isMobile = window.innerWidth <= 640 ? true : false;
    let isLandscape = window.matchMedia('(orientation: landscape)');
    isLandscape = isLandscape.matches;
 
    this.setState({
      originalWidth: window.innerWidth,
      originalHeight: window.innerHeight,
    });

    this.setState({ isLandscape, isMobile }); 
  };

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    let { originalHeight, originalWidth, isLandscape, isMobile} = this.state;
    return (
      <div className="App">
        {isLandscape ?
          <Game width={originalWidth} height={originalHeight} isMobile={isMobile}></Game>
          :
          <Note width={originalWidth} height={originalHeight}></Note>
        }
        <Score></Score>
      </div>
    );
  }
}
  

export default App;
