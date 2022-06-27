import React, { Component } from 'react';
import "../../Style/mainBlogs.css";


export default class blog9 extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    }
  render() {
    return (
      <div className='blog'>
         <article>
         <header><h1>My Final Technical Reflection</h1></header>
        
        <p>
         My goal for the technical side of this project was to add more features to my site in such a way that it improves the experience 
         of my net art without muddying the site with random, unecesarry features. This proved to be challanging seeing that I have had 
         very basic practice with react (I've only made two ReactJS sites) - this made experimenting with new React features an arduous endeavour.
        </p>
        <p>
          Before touching the feedback I've recieved for the original iteration of this websites I wanted to add more features and turn the site 
          into a somewaht polished exam project. The first change I wanted to make was that I tried to figure out how to render more particles 
          in the background when the user has actual content in view (as aposed to acrolling through the empty spaces which I wanted to have less particles). 
          I wanted to do this to emphasise the emptiness of the blank spaces by adding more interaction with the user when they are interacting with the content 
          of the website. I started by trying to get the scroll position of the user every second and using that position to dictate the number of particles on screen 
          (if the user's scroll position has content in view there would be 20 particles, while there would be 10 particles otherwise). The reason I abandoned this 
          idea was that i could not figure out how to constantly update the variable that would dictate the amount of particles.
        </p>
        <p>
          A feature I wanted to add to the previous version of the site was a song that plays while the user scrolls through the sites and stops when the user does 
          not scroll. I took another look at this idea and realised that it was not worth trying to fix. I have made the assumption that the user would most 
          probably find this feature annoying. That paired with me not being able to figure out how to get the song to start and stop playing when I wanted it to 
          has lead me to the conclusion that this feature just was not worth pursuing with the very limited time I had.
        </p>
        <p>
          The friend request box on the top left of the screen was supposed to pop up at random intervals while the user is on the site with a new, randomised response 
          where the "Overloaded..." message is. After looking for tips on how I would go about doing the pop-up feature of this element I realised that I was spending 
          a lot of valuable time on looking for the right guidance. I thus decided to settle for randomizing the message. The flaw in this idea is that the element was 
          created in such a way that the message was already rendered and I could not figure out how to update the message without reloading the page. I could not find 
          anything online that would help with this problem, and seeing that we have recieved no guidance from lecturers I have been left by myself to try and solve this 
          issue. I tried many different solutions, but unfortunantely I did not have more than a few hours to spend on this element - I thus settled for what it is now. 
          Although the component is not very impressive, it does what I need it to do with regards to the net art I have created.
        </p>
        <p>
          With regards to the feedback I have recieved from the previous iteration of the site, most of the problems pointed out to me were very basic issues 
          that were caused by laziness on my part. One of the issues was that I had inconsistent use of className conventions - referring to camelCase I assume. 
          Most of these instances were the names I gave to the main components which I changed but for some reason I could not dicover changing these names broke the site. 
          At first I thought it was that by changing it I created duplicates - I changed the duplicate names and changed the names of components I import in other 
          files, but the site would still break. I thus decided to leave these as is and fix any other cases of this problem. Another issue pointed out in the 
          feedback was inconsistent use of semi-colons, which I hope I fixed - seeing that I went through every file I created in order to add semi-colons where I 
          forgot to in the last version. I folowed the same process in order to fix the issue pointed out regarding my use of h1-h6 not being hierarchical. The feedback 
          also advise me to add more microformatting and semantics. I could however not figure out where I could add more microformatting to my site since 
          it was never a very important part of assignments until now, and the online resources were not helpful, I thus decided to only have the h-card that makes up my footer. 
          With regards to the semantics I went around my site adding as much semantic elements to my site's content where I could. The final piece of feedback was 
          that my "web dev" fundamentals need to be worked on and I needed to add more React elements. I've already talked about my problems with adding more React elements - 
          but with regard to the comment on web dev fundamentals, I have never heard this term, I thus assumed they meant the above mentioned issues (which are fundamental 
          things you should do while designing for the web).
        </p>
        <p>
          In sum, this project was very difficult technically due to my skill level and time constraints, but that being said I am happy with the technical changes 
          I have made seeing that I believe that the site is more polished and aligns well with the vision I had for my net-art experience. The process was tough, 
          but I am grateful for the oppertunity to learn and I believe that this project has tested my tenacity. I know that the site isn't technically impressive, but 
          it does what it needs to do and nothing is broken, I am thus proud of what I have created and I look forward to improving my technical skills going forward with 
          the knowledge of what I need to work on or practice.
        </p>
        <a href='javascript:history.back()' className='backLink'>BACK</a>
          </article>
      </div>
    );
  };
};
