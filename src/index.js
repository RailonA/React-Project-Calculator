import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './scripts/app';

const Calculator = () => (
  <App />
);

ReactDOM.render(
  <Calculator />,
  document.getElementById('root'),
);