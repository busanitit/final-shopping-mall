/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { FiMonitor } from "react-icons/fi";
import { Container } from "react-bootstrap";
const images = {
  img1:
    "https://modo-phinf.pstatic.net/20200227_9/15827792012465ymS7_JPEG/mosaKPVJ0w.jpeg?type=a1100",
  img2:
    "https://modo-phinf.pstatic.net/20200227_240/1582791927364gLjU7_JPEG/mosauMMgzj.jpeg?type=w1100",
};

const Title = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #145b3a;
  border-bottom: 1px solid #145b3a;
  margin-top: 80px;
`;

const SemiTitle = styled.h4`
  color: #145b3a;
  text-align: center;
  font-size: 20px;
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

const Text = styled.p`
  display: inline-block;
  color: #666;
  font-weight: 600;
  padding: 3px 0 4px;
  line-height: 20px;
`;

const CustomButton = styled.button`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  background-color: #145b3a;
  color: #fff;
  width: 100%;
  height: 70px;
  border: none;
`;
const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  margin-bottom: 16px;
  width: 100%;
  overflow: hidden;
`;
const VideoInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoInfoDesc = styled.h3`
  font-size: 12px;
  font-weight: 600;
  margin-right: 16px;
`;

const VideoInfoLink = styled.a`
  color: #bbb;
  &:hover {
    text-decoration: none;
    color: #bbb;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default class extends React.Component {
  render() {
    return (
      <Container>
        <Title>Incense Shop</Title>
        <Space />
        <SemiTitle>300여종 이상의 인센스 콜렉션</SemiTitle>
        <Space />
        <Space />
        <Img src={images.img1} alt='차' />
        <Space />
        <Text>
          아로마 인센스는 심신의 안정과 이국적인 분위기를 선사해주는 고대부터
          이어져 내려오는 힐링 아이템입니다. 또오기 스토어는 향기로운 휴식을
          선사하기 위해 300여종 이상의 향기를 수집하고 여러분께 전하고 있습니다.
          (또오기 마스터들의 인센스 컬렉팅은 계속됩니다.)
          <br />
          <br />
          신뢰할 수 있는 브랜드의 인센스를 직접 샘플링하고 선별해서 컬렉팅하고
          있습니다. 일상을 더욱 풍성하게 해줄 나만의 취향저격 인센스를 또오기
          스토어에서 만나보세요.
        </Text>
        <Line />
        <Space />
        <SemiTitle>오프라인 시향</SemiTitle>
        <Space />
        <Img src={images.img2} alt='시향' width={1100} />
        <Space />
        <Text>
          또오기 스토어 오프라인 샵에 방문하시면, 모든 종류의 향을 시향해보고
          향을 선택할 수 있습니다. 그리고 입문자분들도 걱정없이 인센스를 즐길 수
          있도록 사용 가이드도 해드립니다.
        </Text>
        <Line />
        <Space />
        <SemiTitle>온라인 스토어 시향</SemiTitle>
        <Space />
        <VideoContainer>
          <Iframe
            title='시향'
            width='100%'
            height='618'
            src='https://www.youtube.com/embed/RaSMZbcHcoA'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoContainer>
        <VideoInfo>
          <VideoInfoDesc>
            [인센스 가이드] 실패없이 인센스를 구매하는 팁! / 온라인 쇼핑으로
            인센스 시향하는 법!
          </VideoInfoDesc>
          <VideoInfoLink
            href='https://www.youtube.com/embed/RaSMZbcHcoA'
            target='_blank'
          >
            youtube.com
          </VideoInfoLink>
        </VideoInfo>
        <Space />
        <Text>
          온라인에서도 실패없는 인센스 선택을 위해 다양한 컨셉의 [또오기 인센스
          샘플러]를 이용할 수 있습니다. 10종의 인센스 샘플을 하나의 패키지로
          구매할 수 있습니다. 인센스 샘플을 이용해 다양한 향을 시향해 보시고,
          나만의 힐링 인센스를 찾아보세요.
          <br />
          <br />
          다양한 테마의 샘플러가 계속 업데이트됩니다.
        </Text>
        <CustomButton>
          <FiMonitor fontSize={23} /> 샘플러 구매하기
        </CustomButton>
        <Line />
        <Space />
        <SemiTitle>인센스 입문 가이드</SemiTitle>
        <Space />
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
        <VideoInfo>
          <VideoInfoDesc>
            향덕이 전하는 인센스 가이드! -전편- (인센스 유해한가요?)
          </VideoInfoDesc>
          <VideoInfoLink
            href='https://www.youtube.com/embed/iNIEI2zcpFo'
            target='_blank'
          >
            youtube.com
          </VideoInfoLink>
        </VideoInfo>
        <Space />
        <Space />
        <VideoContainer>
          <Iframe
            title='가이드 후편'
            width='100%'
            height='618'
            src='https://www.youtube.com/embed/3x1OedQk784'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoContainer>
        <VideoInfo>
          <VideoInfoDesc>
            향덕이 전하는 인센스 가이드! -후편- (인센스 활용 꿀팁!)
          </VideoInfoDesc>
          <VideoInfoLink
            href='https://www.youtube.com/embed/3x1OedQk784'
            target='_blank'
          >
            youtube.com
          </VideoInfoLink>
        </VideoInfo>
        <Space />
      </Container>
    );
  }
}
