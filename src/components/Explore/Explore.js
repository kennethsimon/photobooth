import React, { Component } from "react";
import Slider from "react-slick";


class Explore extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className='ui container'> 
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className='slider-link'>
            <h3>1</h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}

export default Explore;