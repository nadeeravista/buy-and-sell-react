import React, { Component } from 'react';


class App extends Component {

  state = {
    series: [1]
  }
  render() {
    return (
        
    <div className="App">
        <div className="header">
            <div className="row">
                <div className="col-1">
                    <h2><a href="#">SleekTrader</a></h2>
                </div>
                <div className="col-6">
                    <div className="form-elm-3">
                        <input className="inpt" type="text" />
                        <button className="btn button-success">Search</button>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-elm-2">
                        <button className="btn button-success">Login</button>
                        <button className="btn button-default">New your add</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-car"></i>
                </div>
                <div className="widget-description">
                    Vehciles
                    <div className="widget-subtitle">Used & new</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="widget-description">
                    Electronics
                    <div className="widget-subtitle">Phone, TV, Laptops etc</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-igloo"></i>
                </div>
                <div className="widget-description">
                    Property
                    <div className="widget-subtitle">Sale & rent</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-tree"></i>
                </div>
                <div className="widget-description">
                    Home & Garden
                    <div className="widget-subtitle">Furniture, appliances, garden</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-tshirt"></i>
                </div>
                <div className="widget-description">
                    Fashion
                    <div className="widget-subtitle">Cloths, Jwelleries</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-car"></i>
                </div>
                <div className="widget-description">
                    Vehciles
                    <div className="widget-subtitle">Used & new</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-basketball-ball"></i>
                </div>
                <div className="widget-description">
                    Electronics
                    <div className="widget-subtitle">Phone, TV, Laptops etc</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-birthday-cake"></i>
                </div>
                <div className="widget-description">
                    Property
                    <div className="widget-subtitle">Sale & rent</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-cocktail"></i>
                </div>
                <div className="widget-description">
                    Home & Garden
                    <div className="widget-subtitle">Furniture, appliances, garden</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-wrench"></i>
                </div>
                <div className="widget-description">
                    Fashion
                    <div className="widget-subtitle">Cloths, Jwelleries</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-swimmer"></i>
                </div>
                <div className="widget-description">
                    Vehciles
                    <div className="widget-subtitle">Used & new</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-truck"></i>
                </div>
                <div className="widget-description">
                    Electronics
                    <div className="widget-subtitle">Phone, TV, Laptops etc</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-wrench"></i>
                </div>
                <div className="widget-description">
                    Property
                    <div className="widget-subtitle">Sale & rent</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-table-tennis"></i>
                </div>
                <div className="widget-description">
                    Home & Garden
                    <div className="widget-subtitle">Furniture, appliances, garden</div>
                </div>
            </div>
            <div className="widget-small">
                <div className="widget-icon">
                    <i className="fas fa-tshirt"></i>
                </div>
                <div className="widget-description">
                    Fashion
                    <div className="widget-subtitle">Cloths, Jwelleries</div>
                </div>
            </div>
        </div>
    </div>
    
    );
  }
}

export default App;
