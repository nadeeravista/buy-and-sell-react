import React, { Component } from 'react';

class Category extends Component {
   
  render() {
    return (
        <div class="admin-body-container">
         <form>
           <label>Name</label>
           <input type="text"/>
         </form>
        </div>
    );
  }
}

export default Category;