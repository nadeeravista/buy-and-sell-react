import React, { Component } from 'react';
import Button from './Button';

class ButtonSuccess extends Button {
  render() {
    // You can use them as regular CSS styles
    return <button className="btn button-success">{this.props.label}</button>
  }
}

export default ButtonSuccess;