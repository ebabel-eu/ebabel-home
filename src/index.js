// React
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

// Bootstrap
import 'bootstrap/dist/js/npm.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Internal dependencies.
import routes from './config/routes';
import './index.css';

ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));