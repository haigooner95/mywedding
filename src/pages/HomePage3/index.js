import React from  'react';

// components
import Couple2 from '../../components/couple2';
import PreviewHero from '../../components/hero3';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import People from '../../components/people';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Rsvp from '../../components/rsvp';
import Gift from '../../components/gift';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'


const Homepage3 = () => {
    return(
       <div>
           <Navbar/>
           <PreviewHero/>
           <Saveday/>
           <Couple2/>
           <Welcome/>
           <Story/>
           <People/>
           <Location/>
           <Gallery/>
           <Rsvp/>
           <Gift/>
       </div>
    )
}

export default Homepage3;