import { DataThresholdingSharp } from '@mui/icons-material';
import React, { Component } from 'react';

export default class WireframeItem extends Component {
  render() {
    return (
      <div className='wireframeItem' aria-label={this.props.alt}>
          <h4>{this.props.title}</h4>
          <div style = {{backgroundImage: `url(${this.props.image})`}}></div>
      </div>
    );
  };
};