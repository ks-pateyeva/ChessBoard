import React from 'react';
import Line from './Line.jsx';

const Board = () => {
    let board = [];
    for (let i = 0; i < 8; i++) {
        board.push(
            <Line
                key={i}
                startWithWhite={i % 2 == 0}
            />
        );
    }
    return (
        <div className="board">
            {board}
        </div>
    );
}

export default Board;