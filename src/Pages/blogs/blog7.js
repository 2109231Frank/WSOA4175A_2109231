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
          <h1>My Net-Art Prototype<a href='javascript:history.back()' className='backLink'>BACK</a></h1>
        
        <p>
          My internet artwork is a website that consists of three sections, they are seperated by a long empty 
          space. This empty space as well as the slow moving particles that are avoiding the user's cursor, and 
          the cold colour of the background are the main elements of the artwork. This artwork was designed to 
          evoke sadness and loneliness when the website is being used. The artwork is a commentary on how people 
          were forced to interact with other human beings online instead of in person. Many people (me included) 
          have experienced depression caused by loneliness during the lockdown because online interaction does 
          not come close to meeting the need some people have for socializing. As amazing as the internet is, 
          it can't replace genuine human interaction. The feeling the website/artwork is meant to evoke when 
          the user scrolls through the empty space is very reminiscent of how I felt during lockdown - a desperate 
          need for something/someone to interact with while moving through a sea of meaninglessness on the internet.
        </p>
        <p>
          I have designed and made this artwork with my own experiences in mind but following an exploratory, 
          adaptive design process. I thus did not want to be inspired or influenced by other artworks - the 
          only research on other net-artworks I have done was in order to figure out whether what I wanted to 
          do can be considered a net-artwork. What I've came to understand is that internet art refers to art 
          that can not exist without the internet, seeing that it uses the internet as both it's medium and 
          media. This is - of course - a very basic explenation of what it is, but is at the core of net art. 
          With this in mind I believe that what I have done functions as an internet artwork seeing that it could never exist 
          without the internet, it was designed in a particular way to evoke an emotion from the user and to 
          get my point as the artist across. It is very difficult to say whether something is or is not art, 
          but I am confident in saying that what I have done functions as an artwork by evoking emotion from the 
          user and gets my point or message across. The function of my artwork is to create a relationship with 
          the user on the grounds of shared experience.
        </p>
        <p>
          In David Carrier’s <i>The Work of Art in the Age of the Internet</i> he proposes a categorical system 
          to keep in mind when interacting with or revieiwing internet artworks. This system is divided into the 
          Immediate, the Social, the Activist, and the Liked (Carrier, 2020: p 6). I will use this framework 
          to analyze my artwork. With regards to the Immediate my artwork is commenting on an issue that is 
          relevant to what is going on in the world right now. Even though we are slowly coming out of lockdown, 
          many people (me included) are still dealing with what we experienced during the lockdown. The Social 
          aspect of my artwork isn't strong, my artwork is not meant to be a social experience, it's supposed to 
          be quite the opposite. My artwork is a commentary on how the internet can be a way for people to interact 
          with one another - a way for people to socialize. But, it can not replace genuine human interaction. 
          My artwork isn't really an activist piece, It is supposed to bring attention to what many people experienced 
          during lockdown, and to be a message to said people - a way for me to tell them that they are not alone 
          in their experience. With regards to the Liked, I am not completely sure what Carrier is proposing, but 
          I am assuming he is reffering to how the artwork is being circulated, reproduced, and liked by internet 
          society. In this regard there is nothing this aspect will add to my artwork seeing that it is not being reproduced 
          or shared with anyone other than my lecturers who will be marking it.
        </p>
        <p>
          The only technical challenges I was faced with during the production of my artwork is how to use CSS 
          in such a way that it evokes the desired emotion from the observer. This made me worried about my artwork 
          going forward, seeing that I'm not sure how to add more interactive elements to my artwork. What I do know 
          is that it is going to require a lot of technical experimenting which I will do. My plan for going forward is 
          to experimant with interactive elements, observe the emotional outcome and adapt accordingly.
        </p>
          </article>
      </div>
    )
  }
}
