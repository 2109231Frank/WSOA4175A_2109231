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
         <header><h1>Net-Art Final</h1></header>
        
        <p>
         My net-art is a piece that is spread across my entire site. It permeates the entire site because I needed my piece to be interacted with constantly while 
         the user navigates the site. This was necessary because my piece is supposed to evoke certain emotions in the user that linger (like the loneliness 
         many people could not escape during lockdown). The background of my site/net-art makes use of black and grey colours to symbolise and evoke lonileness 
         while white particles float around the screen. These particles represent genuine/fulfilling interactions that we as human beings need. When the user 
         tries to touch or come close to these particles - the particles will be pushed away. This is supposed to represent the desperate effort for meaningful 
         online interactions that just don't seem to meet our needs. The background is an animated radial gradient where the center is grey and the outer-ring is black. 
         This animated background is meant to represent the act of constantly searching for something, but never finding anything of value (which is why I made 
         it reminiscent of a search light looking for something in the darkness). There are big empty spaces inbetween the content sections of the site. These 
         spaces are meant to symbolise the emptiness many felt during lockdown while not being able to see firends or family, thus the user should take their 
         time scrolling through the website (the links at the top of the page are for those who just care about the content of the page). There is a box 
         titled "Messages" on the top left of the screen, when opened it reveals that there are too many people wishing to talk to the user that the function 
         has overloaded - this represents how many people were desperate for genuine human interaction during the lockdown. Overall, I used CSS 
         to style my site in such a way that it evokes lonileness and sadness in the user, representing what many people (me included have experienced during 
         lockdown).
        </p>
        <p>
          I used <cite>David Carrier’s</cite> <i>he Work of Art in the Age of the Internet</i> to create my artwork. As mentioned in one of my previous blogs,
          Carrier has come up with a categorical system that one could keep in mind when interacting with net-art. These categories are the immediate, the 
          social, the immediate, and the activist <cite>(Carrier, 2020: p 6)</cite>. With regards to the immediate, my net-art is a commentary on lonileness and 
          depression during the lockdown and one of it's causes. Thus, my artwork is still relevant. My artwork ius not a social experience, it is meant to be experienced 
          alone, further emphasising the isolation it is trying to embody, thus the social aspect of it is more or less non-existent. Since the artwork is a 
          commentary on the state of the internet and how it can not replace genuine human interaction, it can somewhat be considered an activist piece. However the 
          main goal of the site is to bring attention to the experiences of many people during lockdown, and to be a message to those people saying that they 
          are not alon and there is nothing wrong with them. With regard ti the liked, my artwork is not meant to be reproduced or shared, thus I paid no attention 
          to this category while designing my artwork.
        </p>
        <p>
          As I've said, I want the audience to experience a sense of isolation, sadness, and desperation for interaction while they navigate through the site. 
          With this piece I am trying to share my - and many other's - experience during lockdown with thos who had no idea. I am trying to tell people who 
          suffered from depression and lonileness during the lockdown that there is nothing wrong with them (we are social beings and the lockdown has caused us 
          to be without meeting that need) and they are not alone in their experiences.
        </p>
        <p>
          With regard to comparing my site with other net-artworks, I follow an exploratory and adaptive design process. This process entails that I focus on my 
          own personal experience of the artwork, how it makes me feel. I then adapt and change the artwork until it evokes the emotions I want it to. I did 
          not want to muddy my ideas and my experience by comparing it to other artworks. In the past I have focused too much on making my projects "as good" 
          as other people's work. This usually resulted in me abandoning meaning and my original goals in order to make something look impressive. I thus did not 
          look at other artworks while designing and finishing my own net-art piece.
        </p>
        <p>
          My artwork fails in "wow factor" I believe. I don't think the artwork is particularly beautiful or impressive. I also wanted to add more interactivity 
          to the artwork itself, but I have set it up in such a way that I could not figure out how to add said interactivity with the given timeframe. That being 
          said, I do think it succeeeds in evoking the emotions I need it too. I believe that experience is exactly what it needs to be in order to get my message 
          across.
        </p>
        <p>
          In conclusion, my net-art permeates the entire site so that it can change the experience of the website in such a way that it evokes, sadness and a 
          feeling of isolation. It does this in order to bring attention to the fact that, as wonderful as the internet is, it can not replace genuine human 
          interaction. It might not be the prettiest net-artwork, but it does what it needs to and I am very happy with this iteration of it. Going forward I would 
          add more interactive elements and spend more time on making it look more pleasing.
        </p>
        <a href='javascript:history.back()' className='backLink'>BACK</a>
          </article>
      </div>
    );
  };
};
