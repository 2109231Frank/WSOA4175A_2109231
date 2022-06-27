import React, { Component } from 'react';
import "../../Style/mainBlogs.css";


export default class blog8 extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    }
  render() {
    return (
      <div className='blog'>
         <article>
         <header><h1>References</h1></header>
        
        <p>
          <ul>
          <li><cite>Costanza-Chock, S., 2020. Traveling While Trans, Boston: Design Justice.</cite></li>
          <li><cite>Danae, 2019. Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet. Digital Art Weekly, 31 January.</cite></li> 
          <li><cite>Design Justice Network, 2016. Design Justice Network. [Online] Available at: https://designjustice.org/ [Accessed April 2022].</cite></li>
          <li><cite>Hamilton, J., 2015. Indirect Flights. [Online] Available at: http://indirect.flights/ [Accessed 7 March 2022].</cite></li>
          <li><cite>Kasapis, S., 2020. nternet Access is a Fundamental Right. Amidst a Pandemic. Digital Inclusion, 19 May. </cite></li>
          <li><cite>Park, J. Y., 2007. Design principles for interactive user experience through net art, Queensland: Central Queensland University.</cite></li>
          <li><cite>Sawako Yokochi, T. O., 2020. The Process of Art-making and Creative Expertise: An Analysis of Artists' Process Modification. Journal of Creative Behaviour, 55(2), pp. 532-545.</cite></li>
          <li><cite>Thorlacius, L., 2007. The Role of Aesthetics in Web Design. Nordicom Review, 28(1), pp. 63-76.</cite></li>
          </ul>
        </p>
        <a href='javascript:history.back()' className='backLink'>BACK</a>
          </article>
      </div>
    );
  };
};
