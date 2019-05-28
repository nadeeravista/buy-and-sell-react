import React, { Component } from 'react';

class PostListItem extends Component {

  render() {
       
    return (
        <div className="widget-post">
            <div className='widget-image'>
                
            </div>
            <div className="widget-post-details">
                <div className="widget-rating">
                    <span className="rating-label">{this.props.data.rating}</span>  
                    {(() => {;
                      let stars = [];
                      for (let i = 1; i <= 5; i++) {
                        if(this.props.data.rating >= i){
                          stars.push(<span className="fa fa-star star-checked"></span>);
                        } else{
                          stars.push(<span className="fa fa-star"></span>);
                        }
                      }
                      return stars;
                    })()}
                </div>
                <div className="widget-title-1">{this.props.data.rate}</div>
                <div className="widget-title-2 box-description">{this.props.data.post_title}</div>
                <div className="widget-title-3 box-description">{this.props.data.description}</div>
                <div className="widget-title-1 box-description">{this.props.data.contact_number}
                  <span className="widget-title-3">({this.props.data.contact_name})</span>
                </div>
            </div>
        </div>
    )
  }
}

export default PostListItem;