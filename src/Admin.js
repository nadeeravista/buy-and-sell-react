import React, { Component } from 'react';
import Footer from './components/Footer';
import PublicHome from './PublicHome';
import Category from './admin/Category';

import { Link } from 'react-router-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Admin extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="header">
            <div className="row">
              <div className="col-1">
                <h2>{this.props.appName}</h2>
              </div>
              <div className="col-12">
                <div className="form-elm-1">
                  <button className="btn button-default">Logout</button>
                </div>
              </div>
            </div>
          </div>
          <div id="bg">
          </div>
          <div className="admin-container">
            <div className="sidebar-menu">
              <ul>
                <li>
                  <Link to="/admin/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
        
          <Switch>
            <Route path="/" exact component={PublicHome}></Route>
            <Route path="/admin/categories" component={Category}></Route>
          </Switch>
      </div>
    );
  }
}

export default Admin;