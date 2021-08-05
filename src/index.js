import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/app';

const Calculator = () => (
  <App />
);

ReactDOM.render(
  <Calculator />,
  document.getElementById('root'),
);