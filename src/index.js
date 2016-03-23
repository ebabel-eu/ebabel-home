// Third party dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import ToolboxApp from 'react-toolbox/lib/app';

// Styling.
import 'material-design-icons/www/css/material.css';
import 'material-design-lite/dist/material.orange-cyan.min.css';

// Internal dependencies.
import Header from './header.js';
import NavigationBar from './navigation-bar.js';

// Internal dependencies.
import App from './app.js';

ReactDOM.render(
  <ToolboxApp>
    <Header />
    <NavigationBar />
    <App />
  </ToolboxApp>
  , document.getElementById('root'));