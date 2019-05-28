import React, { Component } from 'react';
import { withRouter } from "react-router";


class Header extends Component {
   
  render() {
    
    return (
      <div>
        { (this.props.location.pathname == "/admin")
            ? <div/>
            : <div/>
          }
      </div>
      
    );
  }
}

export default withRouter(Header) ;