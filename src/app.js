// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Internal dependencies.
import Header from './components/nav/header/header';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

import Projects from './components/projects/projects';
import Portfolio from './components/portfolio/portfolio';
import Interview from './components/interview/interview';
import GetInTouch from './components/get-in-touch/get-in-touch';
import WhenAmIFree from './components/when-am-i-free/when-am-i-free';
import HireMe from './components/hire-me/hire-me';

import './app.scss';

const App = React.createClass({
  render() {
    return (
      <div className='container'>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <Header />
            <Nav />
          </div>
        </nav>
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Projects} />
      <Route path='portfolio' component={Portfolio} />
      <Route path='interview' component={Interview} />
      <Route path='get-in-touch' component={GetInTouch} />
      <Route path='when-am-i-free' component={WhenAmIFree} />
      <Route path='hire-me' component={HireMe} />
    </Route>
  </Router>
), document.getElementById('root'));
