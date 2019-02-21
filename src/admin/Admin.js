import React, { Component } from 'react';
import AdminMenu from '../menu/AdminMenu';
import AdminHeader from '../admin/AdminHeader';
import AdminRoutes from '../routes/AdminRoutes';

class Admin extends Component {
   
  render() {
    return (
      <div>
        <AdminHeader appName='Administration Pannel'/>
        <div className="admin-container">
            <AdminMenu/>
            <AdminRoutes/>
        </div>
      </div>
      
    );
  }
}

export default Admin;