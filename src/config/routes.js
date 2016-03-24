import React from 'react';
import Router, { DefaultRoute, Route } from 'react-router';

import App from '../components/app/app';

// Documentation:
// https://github.com/reactjs/react-router/blob/832c42946c874fe56ffde0066b1088054311cb98/CHANGES.md

module.exports = (
  <Route path='/' component={App}>
  </Route>
)