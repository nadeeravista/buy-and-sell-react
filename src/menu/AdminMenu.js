import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class AdminMenu extends Component {

  render() {

    return (
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
    );
    
  }
}

export default AdminMenu;