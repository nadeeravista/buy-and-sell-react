import React, { Component } from 'react';
import DashboardContainer from './public/DashboardItemContainer';
import Post from './public/Post';
import Footer from './components/Footer';
import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'


import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostList from './public/PostList';

class PublicHome extends Component {

  state = {
    series: [1]
  }
  render() {

    return (
      <div>
        <div className="header">
          <div className="row">
            <div className="col-1 logo-title">
              <h2><NavLink to="/">{this.props.appName}</NavLink></h2>
            </div>
            <div className="col-6">
              <input className="inpt" type="text" />
              <NavLink to="/list-post">
                <button className="btn button-default">
                  <span className='text'>Search/Show All</span>
                  <i className="fas fa-search"></i>
                </button>
              </NavLink>
            </div>
            <div className="header-login">
              <button className="btn button-default">Login</button>
              <NavLink className="link" to="/new-post"><button className="btn button-default">New Post</button></NavLink>
            </div>
          </div>
        </div>
        <Footer />
          <Switch>
            <Route path="/" exact component={DashboardContainer}></Route>
            <Route path="/new-post" component={Post}></Route>
            <Route path="/list-post" component={PostList}></Route>
          </Switch>
      </div>
    );
  }
}

export default PublicHome;
