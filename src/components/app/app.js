// React
import React from 'react';

// Internal dependencies.
import Header from '../nav/header/header';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

require('./app.css');

export default function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Header />
          <Nav />
        </div>
      </nav>
      {this.props.children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.object,
};
