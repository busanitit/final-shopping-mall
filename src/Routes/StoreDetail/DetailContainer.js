/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

const images = {
  img1:
    'https://shop-phinf.pstatic.net/20191227_228/1577424225033QgC9W_JPEG/14786558588705979_1660534407.jpg?type=f260',
  img2:
    'https://shop-phinf.pstatic.net/20171104_124/ttoogi_1509768941615GQw01_JPEG/33074906239939372_-1571483589.jpg?type=f260',
  img3:
    'https://shop-phinf.pstatic.net/20170922_119/ttoogi_150606067612148jCc_JPEG/29366640745835427_1143639153.jpg?type=f260',
  img4:
    'https://shop-phinf.pstatic.net/20201120_80/1605862262788RvT0k_JPEG/6998108493277962_511162988.jpg?type=f260',
  img5:
    'https://shop-phinf.pstatic.net/20170926_157/ttoogi_1506399502235CwSKT_JPEG/29705466859736143_-424578346.jpg?type=f260',
};
const Space = styled.div`
  width: 99%;
  height: 70px;
`;
const Space1 = styled.div`
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
const Button1 = styled.button`
  margin-top: 20px;
  font-size: 16px;
  /* margin-left: 430px; */
  float:right;
  font-weight: 60;
  background-color: #33cc33;
  color: #ffffff;
  width: 15%;
  height: 40px;
  border: none;
`;
const Button2 = styled.button`
  font-size: 16px;
  float:right;
  font-weight: 60;
  background-color: #595959;
  color: #ffffff;
  width: 15%;
  height: 40px;
  border: none;
`;
const InfoButton = styled.button`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  border:1px solid whitesmoke;
  background-color: #cccccc;
  color: #333333;
  text-align:center;
  text-decoration:none;
  display:inline-block;
  cursor:pointer;
  float:left;
  width:25%;
  height: 50px;
  border: none;
`;
const AmountButton = styled.button`
  border-radius:5px;
  text-align:center;
  border: none;
  cursor:pointer;
  width:5;
  height:25px;
  float:right;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 20px;
`;
const Img = styled.img`
  width: 150%;
  float: left;
`;
const Img2 = styled.img`
  width:160px;
  margin-left: 40px;
`;
const Img3 = styled.img`
  width:100%;
  margin-top: 30px;
  margin-bottom: 80px;
  height:580px;
`;
const Title = styled.div`
  display: inline-block;
  text-align: center;
  padding-bottom: 10px;
  font-size: 56px;
  font-weight: 600;
  color: #145b3a;
  border-bottom: 1px solid #145b3a;
  margin-top: 80px;
  margin-left: 250px;
`;
const SemiTitle = styled.h4`
  color: #0d0d0d;
  text-align: right;
  font-size: 38px;
  font-weight: 600;
`;
const XTitle = styled.h6`
  color: #808080;
  text-align: right;
  font-size: 15px;
`;
const YTitle = styled.h6`
  color: #0d0d0d;
  text-align: left;
  font-size: 15px;
`;
const ZTitle = styled.h4`
  color: #0d0d0d;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
`;
const Text = styled.h6`
  color: #404040;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
const BestItem = styled.h6`
  color: #4d4d4d;
  font-size: 18px;
  margin-left: 40px;
`;
const ItemPrice = styled.h6`
  color: #000000;
  font-size: 18px;
  margin-left: 40px;
`;
const Line = styled.div`
  border-bottom: 2px solid #e6e6e6;
  width: 20%;
  height: 40px;
  margin-left:420px;
`;
const Line1 = styled.div`
  border-bottom: 2px solid #e6e6e6;
  width: 40%;
  height: 40px;
  margin-left:420px;
`;
const List = styled.li`
  font-weight: 600;
  margin-bottom: 7px;
  margin-left:280px;
  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    color: #222;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;
export default class extends React.Component {
  render() {
    return (
      <>
        <CustomButton>찜하기</CustomButton>
        <Title>TTOOGI</Title>
        <hr />
        <Container>
          <div className='image'>
            <Img src={images.img1} alt='상품1' />
          </div>
          <div className='title'>
            <SemiTitle>[HEM]숲속의 향기</SemiTitle>
            <br />
            <XTitle>2,500원</XTitle>
            <Space />
            <Space />
            <Line1 />
            <div classs="amount" >
              <AmountButton>+</AmountButton>
              
              <AmountButton>-</AmountButton>
            </div>  
            <Line1 />
            <div>
              <span>
                <Button1>톡톡문의</Button1>
                <Button1>구매하기</Button1>
              </span>
              <Space />
              <span>
                <Button2>장바구니</Button2>
                <Button2>찜하기</Button2>
              </span>
            </div>
            <div>
            </div>
          </div>
        </Container>
        <hr />
        <YTitle>베스트 상품</YTitle>
        <Space1 />
        <Row className="mb-5" data-role="productList">
          <div class="item" className='mr-1'>
            <div class="thumb_area">
              <Img2 src={images.img1} alt='베스트상품1' />
              <BestItem>[HEM]더문</BestItem>
              <ItemPrice>2,500원</ItemPrice>
            </div>
          </div>
          <br />
          <div class="item" className='mr-1'>
            <div class="thumb_area">
              <Img2 src={images.img2} alt='베스트상품2' />
              <BestItem>[HEM]더문</BestItem>
              <ItemPrice>2,500원</ItemPrice>
            </div>
          </div>
          <div class="item" className='mr-1'>
            <div class="thumb_area">
              <Img2 src={images.img3} alt='베스트상품3' />
              <BestItem>[HEM]더문</BestItem>
              <ItemPrice>2,500원</ItemPrice>
            </div>
          </div>
          <div class="item" className='mr-1'>
            <div class="thumb_area">
              <Img2 src={images.img4} alt='베스트상품4' />
              <BestItem>[HEM]더문</BestItem>
              <ItemPrice>2,500원</ItemPrice>
            </div>
          </div>
          <div class="item" className='mr-1'>
            <div class="thumb_area">
              <Img2 src={images.img5} alt='베스트상품5' />
              <BestItem>[HEM]더문</BestItem>
              <ItemPrice>2,500원</ItemPrice>
            </div>
          </div>
        </Row>
        <InfoButton>상세정보</InfoButton>
        <InfoButton>리뷰</InfoButton>
        <InfoButton>Q&A</InfoButton>
        <InfoButton>반품/교환정보</InfoButton>
        <Space />
        <Space1 />
        <ZTitle>Text - Double click to edit</ZTitle>
        <Space1 />
        <Text>Text - Double click to edit</Text>
        <Img3 src={images.img1} alt="상세화면" />
        <Text>작고 간에 이상이 있음으로써 용감하고 굳세게 살 수있는 것이다~~</Text>
        <Space1 />
        <Line />
        <div className="list"></div>
        <Space1 />
        <List>리스트 항목</List>
        <List>리스트 항목</List>
        <List>리스트 항목</List>
        <List>리스트 항목</List>
        <List>리스트 항목</List>
        <List>리스트 항목</List>
        <List>리스트 항목</List>
        <Line />
        <Img3 src={images.img1} alt="상세화면" />
      </>
    );
  }
}
