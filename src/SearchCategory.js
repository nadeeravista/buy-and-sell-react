import React, { Component } from 'react';
import BaseSearchCategory from './BaseSearchCategory';

class SearchCategory extends BaseSearchCategory {
  render() {
       
    return (
        <div className="widget-small">
            <div className="widget-icon">
                <i className={this.getWidgetIcon(this.props.name)}></i>
            </div>
            <div className="widget-description">
                {this.props.name}
                <div className="widget-subtitle">{this.props.desc}</div>
            </div>
        </div>
    )
  }
}

export default SearchCategory;