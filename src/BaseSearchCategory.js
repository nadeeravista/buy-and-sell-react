import React, { Component } from 'react';

class BaseSearchCategory extends Component {
  render() {

    return (
       <div></div>
    )
  }

  getWidgetIcon(category){
      
      let classes = "";
      switch (category) {
        case "Vehicles" :
            classes = "fas fa-car";
            break;
        case "Electronics":
            classes = "fas fa-mobile-alt";
            break;
        case "Property":
            classes = "fas fa-igloo";
            break;
        case "Home & Garden":
            classes = "fas fa-tree";
            break;
        case "Fashion":
            classes = "fas fa-tshirt";
            break;
        case "Sports":
            classes = "fas fa-basketball-ball";
            break;
        case "Food":
            classes = "fas fa-birthday-cake";
            break;
        case "Services":
            classes = "fas fa-people-carry";
            break;
        case "Other":
            classes = "fas fa-binoculars";
            break;           
          default:
            break;
      }
      return classes;
  }
}

export default BaseSearchCategory;