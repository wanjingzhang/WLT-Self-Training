import React, { Component } from 'react';  
import { Rect } from 'react-konva';

class Background extends React.Component {
    changeSize = () => {
        // to() is a method of `Konva.Node` instances
        this.rect.to({
            scaleX: Math.random() + 0.8,
            scaleY: Math.random() + 0.8,
            duration: 0.2
        });
    };
    render() {
        let { width, height } = this.props;
        return (
            <Rect
                ref={node => {
                    this.rect = node;
                }}
                width={width}
                height={height} 
                fillLinearGradientStartPoint={{ x: 100, y: 0 }}
                fillLinearGradientEndPoint={{ x: 100, y: 100 }}
                fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
            />
        );
    }
}

export default Background;