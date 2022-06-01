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
          <h1>Net-Art Preparatory Work  <a href='javascript:history.back()' className='backLink'>BACK</a></h1>
        
      <section>
        <h2>The Idea</h2>
          <p>
          My website is my artwork. My plan is to use the CSS to manipulate the layout, colours, and the 
          background to evoke a feeling of loneliness and desperation for connection. I will use greyish 
          cold colours with minimal pale particles in the background that will actively avoid the user’s 
          cursor. I will implement a lot of empty space that will hopefully increase the loneliness evoked 
          from the user. The main concern I have with my plan is designing the layout and colours in such 
          a way that it evokes enough of a feeling to get my point across which is a commentary on the fake 
          connectivity of the internet. In other words, my art piece is supposed to symbolize how you can be 
          connected with other people through the internet, but it does not meet the need of genuine human 
          interaction. I wanted to create a symbol of the vastness of the internet that users float through. 
          This concern will be addressed by letting users go through my site and sharing they’re experience 
          with me; I will use this feedback to gauge how close I am to reaching my goal.
          </p>
          <p>
          Sawako Yokochi and Takeshi Okada in their article - The Process of Art-making and Creative Expertise: An 
          Analysis of Artists' Process Modification – propose a creation model, “to investigate the relation between 
          artistic cognitive processes and the formation of artists’ goals.” In which they describe three different 
          types of analogical modifications: Subject, Structure, and Concept modification. These methods of modifications 
          are basically ways in which artists modify their previous works/methodologies in such a way to create new artworks 
          that align better with their artistic visions (Sawako Yokochi, 2020). 
          </p>
          <p>
          For my artwork I will be modifying the subject and concept of my previous website in such a way that it creates a 
          new piece of art. I will be doing this while following an exploratory and adaptive design process wherein I shall 
          pay attention to emotions solicited and evoked by the work and the overall process of making. I will then respond 
          to these emotions and explore them further in order to align the artwork with my overall vision for the piece.
          </p>
      </section>
      <section>
        <h2>Inspiration</h2>
          <p>
          My inspiration for this artwork is my assignment 1 website. More specifically the particles in the background of 
          that website. While playing around with the particles I realised that the fact that they avoid the user’s cursor 
          made me more desperate to touch or interact with the particles. This experience paired with the loneliness and 
          sadness the lockdown has left me with inspired the idea behind this net-art piece. I wanted to make a net-art piece 
          that symbolises my experience of the internet during lockdown: it was a means to an end that was disguised as a 
          substitute for human interaction that actually did not come close to meeting the needs that I have for being around 
          and interacting with other people. This inspiration has led me to the idea of creating a website that was normal when 
          it first loads up, but as soon as the user starts moving through it, it starts to take of the mask and hopefully 
          evokes the same feelings that I felt during lockdown. (I will add links to the different sections of the website, but 
          these will be solely for people who want to read the blogs or look at the wireframes without experiencing the art 
          piece). Since I will be following an exploratory and adaptive process while modifying my previous site to meet my 
          artistic vision for this art piece; I will not be looking at too many external artworks. In other words, I want top 
          focus solely on how my artwork and the process of making it is evoking emotion and I will respond to this without 
          much external influence.
          </p>
      </section>
          </article>
      </div>
    )
  }
}
