import React from  'react';

// components
import Couple from '../../components/couple';
import BackgroundVideo from '../../components/hero4';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import People from '../../components/people';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Rsvp from '../../components/rsvp';
import Gift from '../../components/gift';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'


const Homepage4 = () => {
    return(
       <div>
           <Navbar/>
           <BackgroundVideo/>
           <Saveday/>
           <Couple/>
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

export default Homepage4;