import React, { Component } from "react";
import Slider from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const ScrollContainer = styled.div``;
    
    const Img = styled.img`
      width: 100%;
      height: auto;
      object-fit: cover;
    `;

    return (
      <ScrollContainer>
        <Slider {...settings}>
          <div>
            <Img src='/SlideImg/1.png' alt='slide1' />
          </div>
          <div>
            <Img src='/SlideImg/2.jpeg' alt='slide2' />
          </div>
          <div>
            <Img src='/SlideImg/3.jpeg' alt='slide3' />
          </div>
          <div>
            <Img src='/SlideImg/4.jpeg' alt='slide4' />
          </div>
        </Slider>
      </ScrollContainer>
    );
  }
}

export default SimpleSlider;
