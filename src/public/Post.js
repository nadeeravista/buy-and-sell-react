import React, { Component } from 'react';

class Post extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: '',
      location:'',
      condition: '',
      make: '',
      model: '',
      price: '',
      brand:'',
      listing_title: '',
      description: '',
      deal_method: '',
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

    fetch("http://localhost/buy-and-sell-laravel-backend/public/api/save-post", {
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
          <label>Category</label>
          <input type="text" name="category" required onChange={this.handleInputChange}/>

          <label>Location</label>
          <input type="text" name="location" required onChange={this.handleInputChange}/>

          <label>Post title</label>
          <input type="text" name="post_title" required onChange={this.handleInputChange}/>

          <label>Description</label>
          <input type="text" name="description" required onChange={this.handleInputChange}/>
          
          <label>Name</label>
          <input type="text" name="contact_name" required onChange={this.handleInputChange}/>

          <label>Contact Number</label>
          <input type="text" name="contact_number" onChange={this.handleInputChange}/>

          <label>Availability</label>
          <input type="text" name="availability" onChange={this.handleInputChange}/>

          <label>Rate</label>
          <input type="text" name="rate" onChange={this.handleInputChange}/>

          <label>Rating</label>
          <input type="text" name="rating" onChange={this.handleInputChange}/>
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Post;