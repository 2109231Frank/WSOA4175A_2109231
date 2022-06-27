import React, { Component } from 'react';
import "../../Style/mainBlogs.css";


export default class blog10 extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    }
  render() {
    return (
      <div className='blog'>
         <article>
         <header><h1>My Final Creative Reflection</h1></header>
        
        <p>
         For this iteration of the website I wanted to make some changes to the style of my site so that it emphasises the emotions that I am trying to evoke in the 
         user so that it aligns with my net art - most of the changes I made to my design was because of my net art. After I have made the changes that I wanted 
         to make I looked at the feedback from the previous version of this site.
        </p>
        <p>
          The very first creative change that I've added to the website is the progress bar that fills the navbar when the user scrolls. I kept it subtle by 
          making the fill colour black so that the element fits with the simplistic style I am trying to create. I did this to add a simple interactivity to 
          the site while showing the user that they are not scrolling through a broken site - testing showed that some users scrolled for a little bit and stopped 
          because they assumed the website was not rendering something that it was supposed to (because of the empty space).
        </p>
        <p>
          The second creative choice I've made was adding the Messages box to the site, what I wanted to do with this was to emphasises the amount of people desperately 
          looking for human interactions online. My thinking was that the user would see the box at some point and click on it, revealing that there are too many messages 
          causing the feature to "overload". Again this symbolises the desperation of many people for human interaction, while making the user feel alone themselves 
          seeing that even though so many imaginary people want to interact with the user, there is nothing.
        </p>
        <p>
          With regards to the background, I added a few more particles to the background to improve interaction with the site. While showing my site to 
          users for creative feedback I noticed that many of them did not realize that the cursor pushes the particles away. Since the particles are a big part of my net 
          art - seeing that interacting with them are meant to symbolise constantly trying to get genuine, fulfilling human interaction but never finding anything 
          of value from the online interactions that peopl were forced to do during the lockdown. I thus added more particles with the hope that it increases the chances 
          of users accidentally interacting with them. I changed the colour scheme to black, grey, and white. I did this to make the site seem colder and more lonely. 
          I decided on this solour scheme after researching the loneliest colours - most sources I found agreed on grey. I have animated the background so that the radial 
          gradient moves around. I did this in an attempt to symbolise the constant searching for meaningful/fulfilling interactions online but not finding anything. 
          The background is reminiscent of a search/spot-light looking for something in the darkness.
        </p>
        <p>
          The final design change that I have made in an attempt to aid the experience of my net art, was the fonts I used throughout the site. The text where 
          I am directly talking to the user (for example the blogs and the introductory paragraph) I used a font that looks hand-written, I wanted to make the interaction 
          with me - a human being - to be friendly and welcoming. The text where the site is talking to the user (for example the headings and the messages box) is the 
          default font. I did this to symbolize the cold, basic interactions that the internet forces people to undergo.
        </p>
        <p>
          The feedback that I have recieved for the previous iteration pointed out a concern with the back button on the blogs. It was explained to me that scrollng 
          all the way to the top of the blogs in order to go back to the main page was frustrating and the back button seemed out of place. I tried fixing this issue 
          by moving the button to the bottom of the blog, which I believe also fixes it looking out of place. Another feedback I got was that my email in my footer was 
          difficult to read, which I fixed by making it the same colour as the rest of the text in the footer. The final piece of feedback I got was that I did not add 
          alternative text to the images on my website. The only images onmy site are the wireframes, I fixed this issue by adding Aria-labels to all of the images. This 
          is the first time I've heard of these tags, but alt tags did not seem to work and i found the Aria-label solution on Stack Overflow and it seems fix the issue.
        </p>
        <p>
          Overall, I did not get a big variety of feedback on the creative side of my previous website - I quickly fixed the issues presented in said feedback. 
          This caused me to stress about my exam seeing that the change felt inadequate. I thus set out to change the design of my site to align with my vision 
          for my net-art. I really enjoy where the design has ended up, seeing that it aligns with my vision for my net-art well while looking very pleasing. There 
          are definitely many things I still have to learn, but I am pleased with where the website is now. 
        </p>
        <a href='javascript:history.back()' className='backLink'>BACK</a>
          </article>
      </div>
    );
  };
};
