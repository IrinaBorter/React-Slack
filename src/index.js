import React from 'react';
import ReactDOM from 'react-dom';

import main from './assets/styles/main.scss';

const App = () => <div className={main.containerBlock}>Hello React!</div>;

ReactDOM.render(<App />, document.getElementById('root'));