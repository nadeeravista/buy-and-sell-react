import React, { Component } from 'react';
import Header from './Header';
import CategoryContainer from './CategoryContainer';


class App extends Component {

  state = {
    series: [1]
  }
  render() {
    return (
        
    <div className="App">
        <Header appName="IkmanSearch"/>
          <CategoryContainer></CategoryContainer>
        </div>
    );
  }
}

export default App;
