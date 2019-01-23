import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles
import style from './Button.module.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button">{this.props.label} <div className={style.button}>Green</div>  </div>
  }
}

export default Button;