import React, { Component } from 'react';

class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: {
        name: "",
        icon: "",
        order: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let categoryData = this.state.category;

    fetch("http://localhost:3000/save-category.json")
    .then(res => res.json())
    .then(
      (result) => {
          console.log(result);
          alert("successfully saved "+result.status)
      },
     
      (error) => {
        console.log("error");
      }
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} />

          <label>Icon</label>
          <input type="text" name="icon" value={this.state.icon}/>

          <label>Order</label>
          <input type="text" name="order" value={this.state.order}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Category;