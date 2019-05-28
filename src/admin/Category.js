import React, { Component } from 'react';

class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc:'',
      icon: '',
      order: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    
    console.log(this.state);

    fetch("http://localhost/buy-and-sell-laravel-backend/public/api/save-category", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    })
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
          <input type="text" name="name" required onChange={this.handleInputChange}/>

          <label>Desc</label>
          <input type="text" name="desc" required onChange={this.handleInputChange}/>

          <label>Icon</label>
          <input type="text" name="icon" required onChange={this.handleInputChange}/>

          <label>Order</label>
          <input type="text" name="order"onChange={this.handleInputChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Category;