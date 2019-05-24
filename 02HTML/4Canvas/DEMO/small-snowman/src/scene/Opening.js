import React, { Component } from 'react';
import { Rect } from 'react-konva';
import URLImage from '../lib/URLImage';
 
class Opening extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ratio: 0.606
        }
    }
    
    handleClick = () => { 
        let { ChangeState } = this.props;
        ChangeState(1);
    }
    render() {
        let { ratio } = this.state;
        let { width, height, ChangeState } = this.props;
        return (
            <URLImage src="http://preview2.williamsleatag.cn/shanghai/WLT/Snowman/images/opening.png" x={width * 0.2} width={width * 0.6} height={width * 0.6 * ratio} y={(height - width * 0.6 * ratio) / 2} onClick={this.handleClick}></URLImage> 
        )  
    }
}

export default Opening;