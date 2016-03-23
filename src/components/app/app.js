import React, { Component } from 'react';
import { render } from 'react-dom';

import NavigationBar from '../navigation-bar/navigation-bar.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <p>The rest of the app will be here...</p>
      </div>
    );
  }
}

export default App;