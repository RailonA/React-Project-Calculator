// import Big from 'big.js';
// import PropTypes from 'prop-types';
// import React from 'react';
// import ReactDOM from 'react-dom';

import './styles/style.scss';

import app from './scripts/app';

const content = document.querySelector('#content');
content.className = 'body ';

const mainPage = document.createElement('div');

content.appendChild(mainPage);

const homePage = () => {
    mainPage.append(app());
  };


export default homePage();