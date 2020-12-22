import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  grid-column-gap:50px;
  margin:50px 0;
`;

const images = {
  logo:
    "https://modo-phinf.pstatic.net/20180616_273/1529120222729t2uF5_PNG/mosanbvdWU.png?type=w1100",
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
  img6:
    'https://shop-phinf.pstatic.net/20191226_95/1577364327756Oj0XM_JPEG/batch_DSC_1648.JPG?type=w860',
  img7:
    'https://shop-phinf.pstatic.net/20200204_263/1580796376391xEWeU_JPEG/batch_DSC_1630.JPG?type=w860',
}

const ImageContainer = styled.div`
  background-image:url('https://shop-phinf.pstatic.net/20191227_228/1577424225033QgC9W_JPEG/14786558588705979_1660534407.jpg?type=f260');  
  background-size:contain;
  background-repeat:no-repeat;
  background-position:center center;
  height:400px;
`;
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  margin-bottom: 16px;
  width: 100%;
  overflow: hidden;
`;

const Button = styled.button`
  background-color:#3FC910;
  color:#fff;
  font-size:15px;
  padding: 10px 30px;
  border:none;
  border-radius:2px;
`;

const Button2 = styled.button`
  background-color:#565656;
  color:#fff;
  font-size:15px;
  padding: 10px 30px;
  border:none;
  border-radius:2px;
  margin-top:5px;
`;

const Button3 = styled.button`
  font-size:15px;
  padding: 10px 30px;
  border:none;
  border-radius:2px;
`;

const Button4 = styled.button`
  border-radius:2px;
  border:1px solid #e6e6e6;
  font-size:35px;
  background-color:#ccc;
  box-sizing:border-box;
  display:block;
  width:50px;
  padding-bottom:7px;
`;

const Name = styled.h3`
  font-size:20px;
  margin-bottom:20px;
`;

const Price = styled.h3`
  font-size:24px;
  text-align:right;
`;
const ButtonContainer = styled.div`
  margin-top:200px;
  font-size:25px;
  margin-bottom:10px;
  display:flex;
  align-items:center;
  justify-content:right;
`;

const ButtonContainer1 = styled.div`
  text-align:right;
`;

const Box1 = styled.div`
  padding:0 10px;
`;

const Btn2 = styled.div`

`;

const Div = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:20px;
  gap: 5px;
`;

const Title = styled.img`
  width: 25%;
  display:block;
  margin:0 auto;
  //가운데 정렬
`;

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
const Button5 = styled.button`
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
const Title3 = styled.div`
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
  margin-top:10px;
  margin-bottom:10px;
  color: #4d4d4d;
  font-size: 16px;
  margin-left: 40px;

`;
const ItemPrice = styled.h6`
  color: #000000;
  font-weight:600;
  font-size: 18px;
  margin-left: 40px;
`;
const Line2 = styled.div`
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
const Line = styled.div`
  width:99%;
`;
const Row = styled.div`
  justify-items:stretch;
  display:grid;
  grid-template-columns:repeat(5, 1fr);
`;
export default () =>
  <>
    <Title src={images.logo} alt='로고' />
    <GridContainer>
      <ImageContainer>
      </ImageContainer>
      <div>
        <Name>[샘플러 시리즈] HEM 베스트 시리즈 / 글로벌 No1 인센스 브랜드 / 온라인 시향 패키지 / 10종 샘플</Name>
        <Price>8,500원</Price>
        <ButtonContainer>
          <Button4>-</Button4>
          <Box1>1</Box1>
          <Button4>+</Button4>
        </ButtonContainer>
        <ButtonContainer1>
          <Div>
            <Button>구매하기</Button>
            <Button3>톡톡문의</Button3>
          </Div>
          <Div>
            <Button2>장바구니</Button2>
            <Button2>찜하기</Button2>
          </Div>
        </ButtonContainer1>
      </div>
    </GridContainer>
    <hr />
    <Name>베스트상품</Name>
    <Row>
      <div class="item" className='mr-1'>
        <div class="thumb_area">
          <Img2 src={images.img1} alt='베스트상품1' />
          <BestItem>[상품이름1] 상품요약1</BestItem>
          <ItemPrice>8,500원</ItemPrice>
        </div>
      </div>
      <div class="item" className='mr-1'>
        <div class="thumb_area">
          <Img2 src={images.img2} alt='베스트상품2' />
          <BestItem>[상품이름2] 상품요약2</BestItem>
          <ItemPrice>2,500원</ItemPrice>
        </div>
      </div>
      <div class="item" className='mr-1'>
        <div class="thumb_area">
          <Img2 src={images.img3} alt='베스트상품3' />
          <BestItem>[상품이름3] 상품요약3</BestItem>
          <ItemPrice>2,500원</ItemPrice>
        </div>
      </div>
      <div class="item" className='mr-1'>
        <div class="thumb_area">
          <Img2 src={images.img4} alt='베스트상품4' />
          <BestItem>[상품이름4] 상품요약4</BestItem>
          <ItemPrice>2,500원</ItemPrice>
        </div>
      </div>
      <div class="item" className='mr-1'>
        <div class="thumb_area">
          <Img2 src={images.img5} alt='베스트상품5' />
          <BestItem>[상품이름5] 상품요약5</BestItem>
          <ItemPrice>2,500원</ItemPrice>
        </div>
      </div>
    </Row>
    {/* <InfoButton>상세정보</InfoButton>
    <InfoButton>리뷰</InfoButton>
    <InfoButton>Q&A</InfoButton>
    <InfoButton>반품/교환정보</InfoButton> */}
    <hr />
    <Space />
    <Space1 />
    <ZTitle>제목</ZTitle>
    <Space1 />
    <Text>내용</Text>
    <Img3 src={images.img6} alt="상세화면" />
    <Text>작고 간에 이상이 있음으로써 용감하고 굳세게 살 수있는 것이다~~</Text>
    <Space1 />
    <VideoContainer>
          <Iframe
            title='가이드 전편'
            width='100%'
            height='618'
            src='https://www.youtube.com/embed/iNIEI2zcpFo'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoContainer>
    <Line />
    <div className="list"></div>
    <Space1 />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <Line />
    <Img3 src={images.img7} alt="상세화면" />

  </>