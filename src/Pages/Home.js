import React, { Component } from 'react';
import "../Style/Home.css";
import MainIcon from "../Images/MainIcon.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className='Home' style={{backgroundImage: `url(${MainIcon})`}}>
        <div className='HeaderContainer'>
            <h1 className='homeh1'>FRANCO HAYES PHOTOGRAPHY</h1>
            <p className='homeP'>
                This is where I like to talk about things I find interesting (see blogs page), 
                as well as share some of my photographs and writing pieces (coming soon).
            </p>
        </div>
      </div>
    )
  }
}

