import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const ScrollContainer = styled.div`
      height: 400;
      overflow: hidden;
    `;
    const Img = styled.img`
      width: 100%;
      height: auto;
      object-fit:cover;
    `;

    return (
      <ScrollContainer>
        <Slider {...settings}>
          <div>
            <Img
              src='https://modo-phinf.pstatic.net/20200227_7/1582794256365I0zjj_PNG/mosaBCNRTa.png'
              alt='slide1'
            />
          </div>
          <div>
            <Img
              src='https://modo-phinf.pstatic.net/20200227_145/1582794257114vByP0_JPEG/mosa4A7JRL.jpeg'
              alt='slide2'
            />
          </div>
          <div>
            <Img
              src='https://modo-phinf.pstatic.net/20200227_155/1582794258264fVqWP_JPEG/mosapztbjp.jpeg'
              alt='slide3'
            />
          </div>
          <div>
            <Img
              src='https://modo-phinf.pstatic.net/20200227_189/1582794259151BSkyv_JPEG/mosacFCOb5.jpeg'
              alt='slide4'
            />
          </div>
        </Slider>
      </ScrollContainer>
    );
  }
}

export default SimpleSlider;
