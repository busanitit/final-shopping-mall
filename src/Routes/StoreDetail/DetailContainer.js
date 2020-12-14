/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";


const images = {
  img1:
  'https://shop-phinf.pstatic.net/20191227_228/1577424225033QgC9W_JPEG/14786558588705979_1660534407.jpg?type=f260',
  };

const Space = styled.div`
  width: 99%;
  height: 40px;
`;


const CustomButton = styled.button`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 60;
  background-color: #333333;
  color: #ffffff;
  width: 10%;
  height: 30px;
  border: none;
`;

const ImgContainer1 = styled.div`
  display: grid;
  grid-template-columns: 540px 540px;
  grid-column-gap: 20px;
`;

const ImgContainer2 = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-column-gap: 20px;
`;

const Line = styled.div`
  border-bottom: 1px solid #e6e6e6;
  width: 20%;
  height: 40px;
`;

const Title = styled.div`
  display: inline-block;
  text-align: center;
  padding-bottom: 10px;
  font-size: 56px;
  font-weight: 600;
  color: #145b3a;
  border-bottom: 1px solid #145b3a;
  margin-top:80px;
  margin-left:250px;
`;

const SemiTitle = styled.h4`
  color: #0d0d0d;
  text-align: right;
  font-size: 18px;
  font-weight: 600;
`;

export default class extends React.Component {
  render() {
    return (
       <>
        <CustomButton>찜하기</CustomButton>
        <Title>TTOOGI</Title>
        <Line />
        <ImgContainer1>
          <img src={images.img1} alt='상품1' />
        </ImgContainer1>
        <SemiTitle>
          [HEM]숲속의 향기
        </SemiTitle>
        <Line />
       </>
    );
  }
}
