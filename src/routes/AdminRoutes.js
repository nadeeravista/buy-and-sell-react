import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import PublicHome from '../public/PublicHome';
import Category from '../admin/Category'

class AdminRoutes extends Component {

  render() {

    return (
      <div>
        <Route path="/" exact component={PublicHome}></Route>
        <Route path="/admin/categories" component={Category}></Route>
      </div>
    );
  }
}

export default AdminRoutes;