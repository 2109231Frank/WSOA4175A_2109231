import React, { Component } from 'react';
import "../../Style/mainBlogs.css";


export default class blog3 extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    }
  render() {
    return (
      <div className='blog'>
         <article>
          <h1>References<a href='javascript:history.back()' className='backLink'>BACK</a></h1>
        
        <p>
          <ul>
          <li>Costanza-Chock, S., 2020. Traveling While Trans, Boston: Design Justice.</li>
          <li>Danae, 2019. Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet. Digital Art Weekly, 31 January.</li> 
          <li>Design Justice Network, 2016. Design Justice Network. [Online] Available at: https://designjustice.org/ [Accessed April 2022].</li>
          <li>Hamilton, J., 2015. Indirect Flights. [Online] Available at: http://indirect.flights/ [Accessed 7 March 2022].</li>
          <li>Kasapis, S., 2020. nternet Access is a Fundamental Right. Amidst a Pandemic. Digital Inclusion, 19 May. </li>
          <li>Park, J. Y., 2007. Design principles for interactive user experience through net art, Queensland: Central Queensland University.</li>
          <li>Thorlacius, L., 2007. The Role of Aesthetics in Web Design. Nordicom Review, 28(1), pp. 63-76.</li>
          </ul>
        </p>
          </article>
      </div>
    )
  }
}
