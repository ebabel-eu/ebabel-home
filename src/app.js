// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

// Internal dependencies.
import Projects from './components/projects/projects';
import GetInTouch from './components/get-in-touch/get-in-touch';
import './app.css';

const App = React.createClass({
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Current projects</Link></li>
          <li><Link to="/get-in-touch">Get in touch</Link></li>
        </ul>

        {/*

    const links = [
      { label: 'Current projects', url: '/', current: true},
      { label: 'Get in touch', url: '/get-in-touch' },
      { label: 'When am I free', url: '/when-am-i-free' },
      { label: 'Hire me', url: '/hire-me' }
    ];
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </nav>
    )
  }
})

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Projects} />
      <Route path="get-in-touch" component={GetInTouch} />
    </Route>
  </Router>
), document.getElementById('root'))
