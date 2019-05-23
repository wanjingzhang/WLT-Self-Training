import React, { Component } from 'react';  
import { Stage, Layer } from 'react-konva';

import Background from './lib/Background';
 
class Game extends Component { 
 
    render() {
        let { width, height } = this.props;
        return (
            <Stage width={width} height={height}>
                <Layer>
                    <Background width={width} height={height} />
                </Layer>
            </Stage>
        )
    }
}

export default Game;