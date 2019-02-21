import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Admin from '../admin/Admin';
import PublicHome from '../public/PublicHome';

class Routes extends Component {

  render() {

    return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PublicHome}></Route>
          <Route path="/admin" component={Admin}></Route>
        </div>
      </BrowserRouter>
    </div>
    );
    
  }
}

export default Routes;