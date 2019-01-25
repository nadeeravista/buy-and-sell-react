import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {
  render() {

    return (
      <div className="header">
          <div className="row">
              <div className="col-1">
                  <h2><a href="#">{this.props.appName}</a></h2>
              </div>
              <div className="col-6">
                  <Search size="1"/>
              </div>
              <div className="col-3">
                  <div className="form-elm-2">
                      <button className="btn button-default">Login</button>
                      <button className="btn button-default">New your add</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Header;