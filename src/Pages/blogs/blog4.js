import React, { Component } from 'react';
import "../../Style/mainBlogs.css";


export default class blog4 extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    }
  render() {
    return (
      <div className='blog'>
          <article>
          <header><h1>Self Reflection</h1></header>

          <p>
          Throughout this block I believe that I have progressed practically. I have learned how to work with react 
          as well as node. React was a very new experience, and it took me a while to get used to. As soon as 
          I got used to props, components, and states (I am very much still learning though) I started picking up speed 
          with the design of my website. Theoretically I feel like I have engaged with our work acceptably, that being said I 
          feel like I could have done more wuth regards to our theory this block. With the lack of class and discussion 
          I have not been very motivated to spend alot of time on theory which I am embarrassed to admit. Overall I think 
          my perfromance this block was acceptable and I am happy with this first assignment.
          </p>
          <a href='javascript:history.back()' className='backLink'>BACK</a>
          </article>
      </div>
    );
  };
};
