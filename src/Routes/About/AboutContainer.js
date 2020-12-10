/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const images = {
  logo:
    "https://modo-phinf.pstatic.net/20180616_273/1529120222729t2uF5_PNG/mosanbvdWU.png?type=w1100",
  img1:
    "https://modo-phinf.pstatic.net/20200227_238/1582779513752NGK80_PNG/mosa7RFS7k.png?type=w1100",
  img2:
    "https://modo-phinf.pstatic.net/20180616_261/1529116687659esFQE_JPEG/mosa3U1Tv2.jpeg?type=w1100",
  img3_1:
    "https://modo-phinf.pstatic.net/20171110_19/1510302660574FfgYH_JPEG/mosa79cg18.jpeg?type=f540_540",
  img3_2:
    "https://modo-phinf.pstatic.net/20171110_263/15103026610982bBoX_JPEG/mosadHrqOD.jpeg?type=f540_540",
  img4_1:
    "https://modo-phinf.pstatic.net/20180616_238/1529120359576DxhvM_JPEG/mosaWgMiPx.jpeg?type=f353_353",
  img4_2:
    "https://modo-phinf.pstatic.net/20180616_151/1529120360272Xfw9V_JPEG/mosaWCFvQB.jpeg?type=f353_353",
  img4_3:
    "https://modo-phinf.pstatic.net/20180616_281/1529120360711tQiC2_JPEG/mosaNc5J8G.jpeg?type=f353_353",
};

const Title = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #145b3a;
  border-bottom: 1px solid #145b3a;
`;

const SemiTitle = styled.h4`
  color: #145b3a;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const Line = styled.div`
  border-bottom: 1px solid #e6e6e6;
  width: 99%;
  height: 40px;
`;

const Space = styled.div`
  width: 99%;
  height: 40px;
`;

const Text = styled.pre`
  display: inline-block;
  color: #666;
  font-weight: 600;
  padding: 3px 0 4px;
  line-height: 20px;
  font-family: MalgunGothic;
`;

const ImgContainer1 = styled.div`
  display: grid;
  grid-template-columns: 540px 540px;
  grid-column-gap: 20px;
`;

const ImgContainer2 = styled.div`
  display: grid;
  grid-template-columns: 353px 353px 353px;
  grid-column-gap: 20px;
`;

const OwnerName = styled.h4`
  color: #222;
  font-size: 17px;
  font-weight: 600;
  padding: 3px 0;
  text-align: center;
`;
const OwnerAnmt = styled.p`
  color: #222;
  padding: 3px 0;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 20px;
`;
export default class extends React.Component {
  render() {
    return (
      <>
        <Title>About</Title>
        <img src={images.logo} alt='로고_1' style={{ display: "block" }} />
        <Line />
        <Space />
        <img src={images.img1} alt='로고_2' />
        <Space />
        <Space />
        <img src={images.img2} alt='로고_3' />
        <Space />
        <Text>
          삶 의 무게와 압박, 회의감을 견뎌내는 동력은 거창한 결단, 일탈,
          멀리있는 이상일 필요는 없습니다. 삶의 행복과 낭만은 생각보다 가까운
          곳, 일상에서 발견할 수 있습니다.
          <br />
          <br />
          일상 속 즐거움, 작은 행복의 순간, 삶의 밸런스를 찾아가는 과정이
          웰라이프(Well-life)가 아닐까요?
          <br />
          <br />
          저희는 의, 식, 주를 넘어 휴(休)에서 웰 라이프(Well-life)의 힌트를
          찾아보려 합니다.
          <br />
          <br />
          일상 속 휴식을 온전하게 즐길 수 있는 좋은 상품들과 가치를 수집하고
          제안하는 Relax Style Store, 여기는 또오기 스토어 입니다.
        </Text>
        <Space />
        <SemiTitle>FROM 1981</SemiTitle>
        <Space />
        <ImgContainer1>
          <img src={images.img3_1} alt='또오기 문방구_1' />
          <img src={images.img3_2} alt='또오기 문방구_2' />
        </ImgContainer1>
        <Space />
        <Text>
          1981년 부산 해운대 초등학교 앞, 작은 가게 "또오기 문방구"가 문을
          엽니다. <br />
          문방구 아저씨가 발품 팔아 모은 장난감과 문구, 만화책과 간식거리는
          언제나 아이들을 설레게 합니다. 그 시절 문방구는 아이들의 아지트이자
          놀이터였고, 삶의 선물가게였습니다. <br />
          <br />
          아이들의 행복과 낭만의 공간이었던 'TTOOGI'의 가치를 36년 후, <br />
          삶의 여유와 균형을 찾는 이들의 아지트이자 삶의 선물가게로 이어가고자
          합니다.
          <br />
          <br />
          1981는 '또오기'라는 유산의 각인이자 고객에 대한 약속을 의미합니다.
        </Text>
        <Space />
        <SemiTitle>Master</SemiTitle>
        <Space />
        <ImgContainer2>
          <img src={images.img4_1} alt='옛날사진_1' />
          <img src={images.img4_2} alt='옛날사진_2' />
          <img src={images.img4_3} alt='옛날사진_3' />
        </ImgContainer2>
        <Space />
        <Space />
        <OwnerName>WONSIDE</OwnerName>
        <OwnerAnmt>
          wonside@tto-ogi.com
          <br />
          instagram/south_vibe
        </OwnerAnmt>
        <Space />
        <OwnerName>J-HUK</OwnerName>
        <OwnerAnmt>
          jei.huk@tto-ogi.com
          <br />
          instagram/jei.huk
        </OwnerAnmt>
        <Space />
        <Space />
        <OwnerName>BAM-B</OwnerName>
        <OwnerAnmt>
          SNS is a waste of time.
          <br />
          I'm always hungry.
        </OwnerAnmt>
        <Space />
      </>
    );
  }
}
