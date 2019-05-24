import React, { Component } from 'react';  
import { Stage, Layer } from 'react-konva';

import Background from './lib/Background';
import Opening from './Opening';

var gameStates = { opening: 0, instruction: 1, inputName: 2, start: 3, gameover: 4 };
/**
 * 游戏对象
 */
class Game extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            gameState: 0
        }
    }
 
    render() {
        let { width, height, isMobile } = this.props;
        let { gameState } = this.state;
        return (
            <Stage width={width} height={height}>
                <Layer>
                    <Background width={width} height={height} />
                    {gameState == 0 ? <Opening width={width} height={height} isMobile={isMobile} gameState={gameState}/> : null}
                    
                </Layer>
            </Stage>
        )
    }
}

export default Game;