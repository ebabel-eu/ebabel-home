// Third party dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import ToolboxApp from 'react-toolbox/lib/app';

// Internal dependencies.
import App from './app.js';

ReactDOM.render(
    <ToolboxApp>
        <App />
    </ToolboxApp>
    , document.getElementById('root'));