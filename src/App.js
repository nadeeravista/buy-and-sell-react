import React, { Component } from 'react';
import RouteFactory from './RouteFactory';

import { BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {

  state = {
    series: [1]
  }
  render() {
    
    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <RouteFactory/>
          </div>
      </BrowserRouter>
      
      </div>
    );
  }
}

export default App;
