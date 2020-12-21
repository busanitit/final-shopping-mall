import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2px;
  margin-bottom:50px;
`;

const Image1 = styled.div`
  background-image: url("https://modo-phinf.pstatic.net/20200227_238/1582779513752NGK80_PNG/mosa7RFS7k.png?type=w1100");
  height: 211px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Image2 = styled.div`
  background-image: url("https://modo-phinf.pstatic.net/20200227_48/15827875693607Jm3l_JPEG/mosaWDb0oB.jpeg?type=a1100");
  height: 211px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Image3 = styled.div`
  background-image: url("https://modo-phinf.pstatic.net/20200227_240/1582791927364gLjU7_JPEG/mosauMMgzj.jpeg?type=w1100");
  height: 211px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Name = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer1 = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image1} {
      opacity: 0.3;
    }
    ${Name} {
      opacity: 1;
    }
  }
`;

const ImageContainer2 = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image2} {
      opacity: 0.3;
    }
    ${Name} {
      opacity: 1;
    }
  }
`;

const ImageContainer3 = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image3} {
      opacity: 0.3;
    }
    ${Name} {
      opacity: 1;
    }
  }
`;

const Tag = styled.span`
  color: #393e46;
`;

const LinkImageForHome = () => (
  <Container>
    <div>
      <Link to='/about'>
        <ImageContainer1>
          <Image1 />
          <Name>
            <Tag role='img' aria-label='name'>
              About
            </Tag>{" "}
          </Name>
        </ImageContainer1>
      </Link>
    </div>
    <div>
      <Link to='/teahouse'>
        <ImageContainer2>
          <Image2 />
          <Name>
            <Tag role='img' aria-label='name'>
              Tea House
            </Tag>{" "}
          </Name>
        </ImageContainer2>
      </Link>
    </div>
    <div>
      <Link to='/incenseshop'>
        <ImageContainer3>
          <Image3 />
          <Name>
            <Tag role='img' aria-label='name'>
              Incense Shop
            </Tag>{" "}
          </Name>
        </ImageContainer3>
      </Link>
    </div>
  </Container>
);

export default LinkImageForHome;
