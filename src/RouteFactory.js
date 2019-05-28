import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Admin from './Admin';
import { withRouter } from "react-router";
import PublicHome from './PublicHome';
import Post from './public/Post';
import PostList from './public/PostList';
import Category from './admin/Category';


class RouteFactory extends Component {

  render() {
    
    return (
    <div>
      
      { (this.props.location.pathname == "/admin")
            ? <Admin/>
            : <PublicHome appName="IkmanService"/>
          }
       
    </div>
    );
    
  }
}

export default withRouter(RouteFactory);