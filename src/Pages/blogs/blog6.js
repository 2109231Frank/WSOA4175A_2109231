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
          <h1>Reflection 2<a href='javascript:history.back()' className='backLink'>BACK</a></h1>
        
        <p>
          This block was a bit more challanging than the last seeing that I had a lot of trouble thinking 
          of a net-art piece to implement into this website. I still have a little trouble working with props 
          and states, but that is just going to take some more practice. Just like last block, the lack of theory 
          discussions in class made it difficult for me to do research etc. That being said, I did go back to my 
          previous blogs and tried to think about the work I engaged with and how could add more to them. I did 
          not change all of them, but I tried my best. With regards to my net-art, I think it aligns with the 
          vision I had for it. It evokes the feeling - in me and the users I had test the site - I wanted it to 
          evoke. Going forward I believe I can improve both the site and the net-art side of it by adding more 
          interactive elements. How I would do this I'm not too sure yet, but for the time being I'm pleased with how 
          my website turned out since it does do what I wanted it to. 
        </p>  
          </article>
      </div>
    )
  }
}
