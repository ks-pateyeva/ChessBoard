import React from 'react';
import Board from './Board.jsx';

import '../styles.css';
import Counter from '../containers/Counter.jsx';

const App = () => (
    <React.Fragment>
        <Board />
        <Counter />
    </React.Fragment>
)

export default App;