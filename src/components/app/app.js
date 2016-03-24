import React, { Component } from 'react';

import NavigationBar from '../navigation-bar/navigation-bar';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavigationBar />
        <p>The rest of the app will be here...</p>
      </div>
    );
  }
}

export default App;