import React from 'react';
import './About.css'
// import '../About/About'

const About = () => {
    return (
        
    <div>
      <h1 className='title p-3'>About Our Company</h1>
        <div className="row">
        <div className="col-lg-6 images">
         <img  src="https:previews.123rf.com/images/maximleshkovich/maximleshkovich1905/maximleshkovich190500144/125135873-minimalist-home-office-desk-workspace-with-laptop-cactus-and-palm-on-beige-background-front-view-cop.jpg" class="img-responsive" alt=""/>
        </div>
        <div className="col-lg-6 p-3">
        <p className='small-title'>About Company</p>
          <h3 className='title'>The Best Global Experts</h3>
            <small>stands for "Najjaci klan idje ikad", founded 2015.</small><br/>
            <p>Clash of Clans is a superb game, freemium or otherwise, with more nuance than most give it credit for. That's why it's passed the test of time since its launch and still has an active community devotedly constructing elaborate fortresses in the hope of becoming invincible.</p>
            <p>Clash of Clans is thus a simple game, but that’s more of a strength than a weakness. It’s simple enough to provide quick, painless matches on an iPhone in an idle moment, and there are enough different units to choose from in the battle mode to make playing against other players endlessly rewarding.</p>
          <p>Best of all, the option to fight against NPC goblins gives Clash of Clans a small edge over similar strategy games that rely almost entirely on player-versus-player combat.</p>
          <button  className='button'>Discover More</button>
          
        </div>
          
         
        </div>
        {/* <About></About> */}
    </div>
        
    );
};

export default About;