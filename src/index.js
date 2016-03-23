// React
import React from 'react';
import ReactDom from 'react-dom';

// Bootstrap
import '../node_modules/bootstrap/dist/js/npm.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Internal dependencies.
import App from './components/app/app';

ReactDom.render(
  <App />, 
  document.getElementById('root')
);