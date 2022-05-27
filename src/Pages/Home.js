import React, { Component } from 'react';
import "../Style/Home.css";
import "../Style/Blogs.css";
import "../Style/Wireframe.css";
import { Bloglist } from '../Helpers/BlogPosts';
import BlogItem from "../Components/BlogItem";
import { Wireframelist } from '../Helpers/WireframeList';
import WireframeItem from '../Components/WireframesItem';
import { Bloglist } from '../Helpers/BlogPosts';
import BlogItem from "../Components/BlogItem";

export default class Home extends Component {
  render() {
    return (
    <main>  
      <div className='bigPage'>
    
      <div className='Home' id='top'>
      
    <div className='bigpage'>
      <div className='Home'>
      <article>
        <div className='HeaderContainer'>
            <h1 className='homeh1'>FRANCO HAYES PHOTOGRAPHY</h1>
            <p className='homeP'>
                This is where I like to talk about things I find interesting (see blogs page), 
                as well as share some of my photographs and writing pieces (coming soon).
            </p>
        </div>
      </article>
      </div>
    

      
      <div className='Blogs' >
    <article>
      <h1 id='blogs'>INTERACTIVE MEDIA BLOGS</h1>

      <div className='Blogs'>
      <h1>INTERACTIVE MEDIA BLOGS</h1>
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
        </div>
    </article>
      </div>
      

      <div className='wireframe'>
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
            <article>
            <h2>Style Guide</h2>
            <p>
                It is quite obvious that my site is very differernt from my wireframes in terms of 
                colour and some layout decisions. This is because as soon as I started working on 
                the site I decided to make it a personal website (for my photography and creative 
                writing - which I will add at a later stage) and thus I wanted to use some of my favourite 
                colours (dark red and black). I know that websites conventionally have lighter backgrounds 
                with darker text, but I think that the opposite also works quite well. The colour pallette 
                fits with my personal brand and I personally think it looks quite unique and is aesthetically 
                pleasing. The font I chose is nothing crazy (I did not want to distract from the actual content) 
                and is just off white in colour so that the contrast 
                is still high against the background while avoiding harshness on the eyes that I personally 
                experience when looking at pure white text against a dark background. The layout of my website is 
                simple and I have tried to deisgn it in such a way that it is clear and easy for the user to 
                navigate through my site. I looked at my previous websites as well as the example provided by 
                Andre to help me with designing my website. The particle background is something I have 
                wanted to put in a website for a long time, but couldn't because I did not know how to use react before now.
                Overall, I am pretty happy with how this website turned out. 
            </p>
            </article>
      </div>
    </div>
    

                 
          </div>
      </div>
    </main>
    )
  }
}

