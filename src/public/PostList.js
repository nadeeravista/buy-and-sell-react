import React, { Component } from 'react';
import PostListItem from '../public/PostListItem';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

  render() {

    const { isLoaded, items } = this.state;
    
    if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <div className="row">
              {items.map(item => (
                  <PostListItem key={item._id} data={item}/>
              ))}
            </div>
          </div>
            
        );
      }
  }

  componentDidMount(){
  
    fetch("http://localhost/buy-and-sell-laravel-backend/public/api/get-posts")
    .then(res => res.json())
    .then(
      (result) => {
          console.log(result.items);
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
     
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
}

export default PostList;