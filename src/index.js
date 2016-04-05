// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/app/app';
import Projects from './components/projects/projects';
import Portfolio from './components/portfolio/portfolio';
import Interview from './components/interview/interview';
import GetInTouch from './components/get-in-touch/get-in-touch';
import WhenAmIFree from './components/when-am-i-free/when-am-i-free';
import HireMe from './components/hire-me/hire-me';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Projects} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="interview" component={Interview} />
      <Route path="get-in-touch" component={GetInTouch} />
      <Route path="when-am-i-free" component={WhenAmIFree} />
      <Route path="hire-me" component={HireMe} />
    </Route>
  </Router>
), document.getElementById('root'));
