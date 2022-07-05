import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import App from './App';
import Test from './Test';
import TestFunc from './TestFunc';

/* 
let counter = 0;

setInterval(() => {
  console.log(counter);
  counter++;
}, 1000) */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TestFunc name={"Luis"} />);

