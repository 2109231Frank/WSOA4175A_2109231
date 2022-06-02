import React, { Component } from 'react';
import "../Style/Home.css";
import "../Style/Blogs.css";
import "../Style/Wireframe.css";
import { Bloglist } from '../Helpers/BlogPosts';
import BlogItem from "../Components/BlogItem";
import { Wireframelist } from '../Helpers/WireframeList';
import WireframeItem from '../Components/WireframesItem';
// import song from '../Audio/bensound-tomorrow.mp3';


// let sadSong = new Audio(song); 

// window.onscroll = function (e) {
//     if (typeof sadSong.loop == 'boolean')
// {
//     sadSong.loop = true;
// }
// else
// {
//     sadSong.addEventListener('ended', function() {
//         this.currentTime = 0;
//         this.play();
//     }, false);
// }
// sadSong.play();
//     console.log("scrolling");
// }
export default class Home extends Component {
  render() {
    return (
    <main>  
      <div className='bigPage'>
    
      <section className='Home' id='top'>
      <article>
        <header className='HeaderContainer'>
            <h1 className='homeh1'>franco steyn</h1>
            <p className='homeP'>
                This website is a net-art piece. It symbolizes how the internet allows people to substitute 
                genuine human connectivity and interaction with online interaction and communication - which 
                ultimately does not meet the needs we have as social beings. Please, scroll to the next sections 
                and take your time to feel what the art-piece is making you feel.
            </p>
            <h2>Thank you for your time.</h2>
        </header>
      </article>
      </section>
    

      
      <section className='Blogs' >
    <article>
      <h1 id='blogs'>INTERACTIVE MEDIA BLOGS</h1>
          <div className='bloglist'>
              {Bloglist.map((blogItem, value) => {
                  return(
                      <BlogItem
                      value = {value}
                      title = {blogItem.title}
                      intro = {blogItem.intro}
                      link = {blogItem.link}
                      />)
              })}
          </div>
          </article>
        </section>
    
      
      

      <section className='wireframe'>
            <h1 id='wires'>STYLE</h1>

            <div className='wireframelist'>
                <article>
                <h2>Wireframes</h2>
                <div>
                {Wireframelist.map((wireframeItem, value) => {
                    return(
                        <WireframeItem
                        value = {value}
                        title = {wireframeItem.title}
                        image = {wireframeItem.image}
                        />
                    )
                })}
                </div>
                </article>
            </div>
            <article className='styleGuide'>
            <h2>Style Guide</h2>
            <p>
                With feedback regarding my previous website's style in mind I set out to create this site 
                that is ultimately a net-art piece. I paid special attention to contrast this time around; 
                I have made the background a pale-ish darkblue in order to make the werbsite feel cold, sad, 
                and lonely (especially when scrolling through the vast empty space inbetween the sections). 
                I then decided to make the text a very light grey so that it stands our very well against the 
                background. I made the text grey instead of white seeing that pure white was a little harsh on 
                my eyes so I attempted to make it easier to look at.
            </p>
            <p>
                The particles in my background were kept from my previous website. They were slowed down in order 
                to bring the energy in the background down, I found that slow moving particles evoked a sadder emotion 
                when navigating through the site. It almost makes it feel like you're looking into the depths of the 
                ocean, nothingness as far as the eye can see. This specifically was perfect for what I wanted to create - 
                it screamed emptiness (in a matter of speaking) when scrolling through the empty spaces. I also decreased the 
                number of particals with the goal of makiing the interaction with them rare, I did this because I wanted the 
                user to feel almost desperate to come in contact with the particles. This desperation was key to 
                get my point across.
            </p>
            <p>
                The blogs section of the website also was change a bit from the original. I made the items smaller and 
                as soon as the user hovers over one of the items they will expand and show a brief intro to what that blog 
                is about. I did this for two main reasons: The first is that I wanted it to look a little emptier than it did 
                originally to add to the intended experience, and the second reason I did this is because I wanted to make the 
                interaction with the items a little more interesting. I wanted to add this specific interaction as a relief almost 
                to the nothingness on the webpage, this is symbolic to the relief I felt when interacting with friends and 
                family online during lockdown. It is supposed to be a brief interaction that immediately goes back to being 
                part of the emptinessof the site when the user moves on - leaving them with the same emotion I am trying to 
                evoke. 
            </p>
            <p>
                The elephant in the room is of course the vast empty space inbetween the sections of the website. 
                This space is the key to my net-art piece - it was designed to evoke loneliness, sadness, and desperation 
                for interaction while it's being scrolled through. The exact length of the spaces was decided on after many 
                iterations. For me personally (and hopefully for you too) the distance is perfect for evoking the intended 
                emotions. I added a song that played while the website was open, but after scrolling through the website for a 
                while I noticed that having a song playing the entire time is quite annoying. I thus removed this. I did add 
                links to the top of the page, but these are actually just for marking purposes - I added 
                the links so that markers could navigate to the actual content of the website without having to scroll for 
                too long. That being said, in order to experience my net-art piece you need to take your time and scroll through 
                the websitel. I am pleased with how the art piece turned out seeing that it evokes emotions withing me 
                personally that is very reminiscent of how I felt during lockdown with the almost meaningless interactions through 
                the internet.
            </p>
            </article>
      </section>
      </div>
    </main>
    )
  }
}

