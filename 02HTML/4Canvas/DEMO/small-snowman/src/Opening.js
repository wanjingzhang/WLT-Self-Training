import React, { Component } from 'react';
import { Rect } from 'react-konva';
import URLImage from './lib/Image';


class Opening extends Component {
    render() {
        let { width, height, isMobile } = this.props;
        return (
            // <URLImage src="http://preview2.williamsleatag.cn/shanghai/WLT/Snowman/images/opening.png" width={isMobile? width : 200 } ></URLImage>
            
            <Rect
                x={0}
                y={0}
                width={width}
                height={height}
                fillPatternScaleY={height / 300}
                fillPatternImage="http://preview2.williamsleatag.cn/shanghai/WLT/Snowman/images/opening.png"

            ></Rect>
        )
        
    }
}

export default Opening;