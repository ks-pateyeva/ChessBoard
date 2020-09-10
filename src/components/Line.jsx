import React from 'react';
import Square from '../containers/Square.jsx';

const Line = (props) => {
    let line = [];
    for (let i  = 0; i < 8; i++) {
        line.push(
            <Square
                key={i}
                white={props.startWithWhite ? i % 2 == 0 : i % 2 != 0 }
            />
        );
    }
    return (
        <div className="line">
            {line}
        </div>
    );
}

export default Line;