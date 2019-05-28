import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Admin from '../admin/Admin';
import PublicHome from '../public/PublicHome';
import Post from '../public/Post';
import PostList from '../public/PostList';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Routes extends Component {

  render() {
    
    return (
    <div>
      <BrowserRouter>
      <div>
      <Header appName='IkmanSearch'/>
          <Switch>
            <Route path="/" exact component={PublicHome}></Route>
            <Route path="/new-post" component={Post}></Route>
            <Route path="/list-post" component={PostList}></Route>
            <Route path="/admin" exact component={Admin}></Route>
          </Switch>
          <Footer/>
      </div>
      </BrowserRouter>
    </div>
    );
    
  }
}

export default Routes;