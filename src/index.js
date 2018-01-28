import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './js/components/App';
import Root from './js/components/Root';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
