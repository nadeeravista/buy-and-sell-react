import React, { Component } from 'react';

class AdminHeader extends Component {
  render() {

    return (
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
      </div>
      
    )
  }
}

export default AdminHeader;