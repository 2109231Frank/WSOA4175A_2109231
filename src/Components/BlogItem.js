import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class BlogItem extends Component {
  render() {
    return (
      
      <Link to = {this.props.link}>
        <div className='blogItemComponents'>
          <h3>{this.props.title}</h3>
          <p>{this.props.intro}</p>
      </div>
      </Link>
    );
  };
};
