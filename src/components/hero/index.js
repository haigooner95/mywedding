import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
    };
    return (
      <Slider {...settings}>
        <div id="home" className="item1">
          <div className="container">
            <div className="slide-content">
              <div className="slide-subtitle">
                <h4>WE ARE GETTING MARRIED</h4>
              </div>
              <div className="slide-title">
                <h2>Save The Date</h2>
              </div>
              <div className="slide-text">
                <p>10-04-2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item2">
          <div className="container">
            <div className="container">
              <div className="slide-content">
                <div className="slide-subtitle">
                  <h4>WE ARE GETTING MARRIED</h4>
                </div>
                <div className="slide-title">
                  <h2>Save The Date</h2>
                </div>
                <div className="slide-text">
                  <p>10-04-2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
