import React, { Component } from 'react';
import Header from '../components/Header';
import DashboardContainer from '../public/DashboardItemContainer';

class PublicHome extends Component {

  state = {
    series: [1]
  }
  render() {

    return (
      <div>
          <Header appName="IkmanSearch"/>
          <DashboardContainer/>
      </div>
    );
  }
}

export default PublicHome;
