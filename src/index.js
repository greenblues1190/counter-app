import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reduxStore, ReduxContext } from './contexts/index';

ReactDOM.render(
  <React.StrictMode>
    <ReduxContext.Provider value={reduxStore}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
