import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button';
import Navigation from './navigation.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Button label="Hello world" raised accent />
      </div>
    );
  }
}

export default App;