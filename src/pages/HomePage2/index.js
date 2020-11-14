import React from  'react';

// components
import Couple2 from '../../components/couple2';
import SimpleSlider2 from '../../components/hero2';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import People from '../../components/people';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Rsvp from '../../components/rsvp';
import Gift from '../../components/gift';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'


const Homepage2 = () => {
    return(
       <div>
           <Navbar/>
           <SimpleSlider2/>
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

export default Homepage2;