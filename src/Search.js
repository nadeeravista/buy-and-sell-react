import React, { Component } from 'react';

class Search extends Component {
  render() {

    return (
      <div className={this.getComponentClass()}>
        <input className="inpt" type="text" />
        <button className="btn button-default">Search</button>
        <i className="fas fa-cog icon-button-default"></i>
      </div>
    )
  }

  getComponentClass() {
    let classes = "";
    if(this.props.size === "1"){
      console.log("Ok");
    }

  switch (this.props.size) {
    case "1":
        classes = "form-elm-1";
        break;
    case "2":
      classes = "form-elm-2";
      break;
    case "3":
      classes= "form-elm-3";
    break;
    default:
      classes = "form-elm-3";
      break;
    }
    return classes;
  };
}

export default Search;