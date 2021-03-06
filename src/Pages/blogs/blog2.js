import React, { Component } from 'react'
import "../../Style/mainBlogs.css";


export default class blog2 extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    }
  render() {
    return (
      <div className='blog'>
        <article> 
        <header><h1>Design And Aesthetics</h1></header>

          <p>
          According to Ji Yong Park in Design Principles For Interactive User Experience Through Net Art: 
          Understanding net artists as “activists in cyberspace” is a very important step towards 
          understanding the principles of web design with regards to user experience <cite>(Park, 2007: p. 3)</cite>. 
          </p>
          <p>
          Although Park’s article focuses more on web art, I still think it could be beneficial to look at 
          one of the key issues he discusses regarding how designers design for the web. This issue is:
          </p>
          <p>
          Invisible design elements:<br/>
          Designers often use the technology within the internet as fundamental elements of their art, for 
          example: code used to manipulate what the screen displays. These elements refer to design elements 
          that are not created externally (they exist on the internet, thus anything you can find on the web 
          could become a design element). Park states that understanding these elements that exist on the web 
          could be important for web designers as well as artists in terms of user experience 
          <cite>(Park, 2007: pp 4-5)</cite>. I believe that it is important that as web designers we remind ourselves 
          that the internet is both canvas and design material so that we can effectively utilize the web 
          towards our goals.
          </p>
          <p>
          Park’s article brings to light a few interesting points regarding net art and how designers tackle 
          the various problems attached to creating art for the web. Personally, I don’t see how most of 
          these design principles correlate with web design itself. Except interactivity which is at the core 
          of web art and web design: both fields require good UI to allow smooth interaction with the user. 
          What I take from Park’s article is that the core principles of design and aesthetic for the web 
          revolve around UI and UX, in order to allow the user to interact with the site/artwork effectively. 
          And I will keep this in mind movng forward, I believe that it is important for web designers to create 
          UI in such a way that it makes using what is being designed fun, easy, and interesting. Good UI is 
          the foundation of good UX.
          </p>
          <p>
          Lisbeth Thorlacius in her article, The Role Of Aesthetics In Web Design, explains where aesthetics 
          play major roles in the design of a successful website. One of these areas is functionality, where 
          Thorlacius explains that the main objective of a website should be to allow the user to interact 
          with the site effectively. The user should be able to efficiently find the information they want 
          while also being able to easily navigate the site <cite>(Thorlacius, 2007, p. 64)</cite>. She goes on to explain 
          that functionality on a website is not everything, designers should not neglect visual design and 
          how it effects UX. Websites don’t have to be artworks, but designers should carefully consider how 
          visual aesthetics influence how their websites are received <cite>(Thorlacius, 2007, pp. 64-65)</cite>.
          </p>
          <p>
          According to Thorlacius Aesthetics effect how the sender is perceived. Meaning that how a website 
          looks can change how the person that “owns” the website is viewed by users. It also effects the 
          navigation and interaction of the site, it is thus important that the aesthetics of a website 
          matches the type of website, the genre of website, and the target audience <cite>(Thorlacius, 2007)</cite>.
          </p>
          <p>
          In conclusion, after looking at these two articles I believe that the core principles of design 
          for the web are UI, UX, while the principles of aesthetics for the web revolve around 
          functionality:  aesthetics need to focus on creating a site that is efficient and user friendly. 
          In other words, these core principles should guide designers toward designing websites that have 
          clear and effective UI, Good UX through navigation and other interactions, and finally the 
          aesthetics of the site should be designed with the site’s sender, type, genre, and target audience 
          in mind. I completely agree with these points, I also believe that first impressions mnake a big impact 
          when it comes to websites, I don't think every site needs to be completely gorgeous, but if a site 
          looks terrible, untidy or sloppy, it will most certainly hinder the user's overall enjoyment when 
          interacting with said site. This also leads to how simple and fun it is to navigate through or use 
          a website; if a site is ugly or if the layout isn't thought out well it will make using the website difficult. 
          </p>
          <a href='javascript:history.back()' className='backLink'>BACK</a>
          </article>
      </div>
    );
  };
};
