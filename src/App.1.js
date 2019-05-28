import React, { Component } from 'react';
import Routes from './routes/Routes';

class App extends Component {

  state = {
    series: [1]
  }
  render() {
    
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;
