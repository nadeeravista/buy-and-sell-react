import React, { Component } from 'react';
import DashboardItem from './DashboardItem';

class DashboardItemContainer extends Component {

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
            <div className="row">
            {items.map(item => (
                <DashboardItem key={item.name} name={item.name} desc={item.desc}/>
            ))}
          </div>
        );
      }
  }

  componentDidMount(){
  
    fetch("http://localhost/buy-and-sell-laravel-backend/public/api/get-categories")
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

  getWidgetIcon(category){
      let classes = "";
      switch (category) {
        case "Vehicles":
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

export default DashboardItemContainer;