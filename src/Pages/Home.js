import React, { Component } from 'react';
import "../Style/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='HeaderContainer-home'>
            <h1 className='Headerh1-home'>WELCOME HOME BITCH!</h1>
            <p>
                Some catchphrase I guess...
            </p>
        </div>
      </div>
    )
  }
}

