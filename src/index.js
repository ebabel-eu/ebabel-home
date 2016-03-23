// Third party dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import ToolboxApp from 'react-toolbox/lib/app';

// Styling.
import 'material-design-icons/www/css/material.css';
import 'material-design-lite/dist/material.orange-cyan.min.css';

// Internal dependencies.
import NavigationBar from './navigation-bar.js';

// Internal dependencies.
import App from './app.js';

// Styling.
import './index.css';

ReactDOM.render(
  <ToolboxApp>
    <div className='mdl-grid nadj-max-width'>
      <NavigationBar />
      <App />
    </div>
  </ToolboxApp>
  , document.getElementById('container'));