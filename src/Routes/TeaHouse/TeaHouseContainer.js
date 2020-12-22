/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { IoTicketOutline } from "react-icons/io5";
import { VscCalendar } from "react-icons/vsc";
import { Container } from "react-bootstrap";

const images = {
  img1:
    "https://modo-phinf.pstatic.net/20200227_17/1582779202234J6bwd_JPEG/mosaWU2W6n.jpeg?type=a1100",
  img2:
    "https://modo-phinf.pstatic.net/20200227_22/1582781184348xOYp7_JPEG/mosaquxMPV.jpeg?type=a1100",
  img3:
    "https://modo-phinf.pstatic.net/20200227_48/15827875693607Jm3l_JPEG/mosaWDb0oB.jpeg?type=a1100",
};

const Title = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #145b3a;
  border-bottom: 1px solid #145b3a;
  margin-top:80px;
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

const Text = styled.p`
  display: inline-block;
  color: #666;
  font-weight: 600;
  padding: 3px 0 4px;
  line-height: 20px;
`;

const List = styled.ul`
  margin-top: 20px;
`;

const Item = styled.li`
  font-weight: 600;
  margin-bottom: 7px;
  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    content: "·";
    color: #222;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
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

const Img = styled.img`
  width:100%;
`;

export default class extends React.Component {
  render() {
    return (
      <Container>
        <Title>Tea House</Title>
        <Space />
        <SemiTitle>Tea Store</SemiTitle>
        <Space />
        <Space />
        <Img src={images.img1} alt='티 스토어' />
        <Space />
        <Text>
          고전적인 다도 문화를 현대적이고 캐주얼하게 재해석하여, 생활속에서
          잎차(Leaf Tea)를 쉽게 즐기는 '생활다도(Casual Teaism)'로 안내합니다.
          차와 함께 일상속 휴식을 즐기고 싶은 분들을 위한 잎차 패키지와 생활다도
          다기류도 전합니다.
        </Text>
        <List>
          <Item>다양한 Leaf Tea 라인업 (보이차, 오룡차, 홍차, 백차 등)</Item>
          <Item>쉽게 즐길 수 있는 잎차! "또오기 소분 패키지" </Item>
          <Item>생활다도를 위한 차 도구들과 세트상품</Item>
          <Item>취향저격 찻자리 구성을 위한 "다기세트 피팅 서비스"</Item>
        </List>
        <Line />
        <Space />
        <SemiTitle>Tea Guide Program</SemiTitle>
        <Space />
        <Img src={images.img2} alt='티 가이드 프로그램' />
        <Space />
        <Text>
          찻잎을 이해하고 차를 알아가면서 즐긴다면, 일상속 찻자리는 더욱
          풍미롭고, 즐거운 시간이 될 수 있습니다. 또오기 스토어에서 진행되는
          다양한 가이드 프로그램으로 생활다도의 참 즐거움을 느껴보세요.
        </Text>
        <List>
          <Item>찻잎이 만들어 내는 6대 차류 가이드</Item>
          <Item>풍성한 찻자리를 위한 다기(다구) 사용 가이드</Item>
          <Item>다양한 힐링 프로그램과의 콜라보레이션</Item>
          <Item>[네이버 예약]을 통해 클래스 확인과 예약을 할 수 있습니다.</Item>
        </List>
        <CustomButton>
          <IoTicketOutline fontSize={23} /> 티클래스 예약하기
        </CustomButton>
        <Line />
        <Space />
        <SemiTitle>Tasting Table Program</SemiTitle>
        <Space />
        <Img src={images.img3} alt='시음회' />
        <Space />
        <Text>
          차와 친해지고 싶은데, 어떻게 시작해야할지 모르신다면, 또오기 시음회와
          함께 해보세요. 또오기 마스터가 추천하는 3가지 잎차에 대한 가이드와
          함께 시음, 품평을 즐길 수 있습니다. 
          <br />
          <br />
          더불어 차에 관심있는 같은 취향의 분들과 교류도 즐길 수 있답니다.
          <br />
          <br />
          향과 음악과 잎차(Leaf tea)가 어우러진 또오기 티 테이블에서 6대 차류
          품평을 즐겨보세요.
        </Text>
        <List>
          <Item>소규모로 운영되는 프리미엄 티 테이블</Item>
          <Item>사전 예약으로만 참석할 수 있습니다.</Item>
          <Item>1시간 동안 최대 3종류의 잎차를 즐길 수 있습니다.</Item>
          <Item>또오기 마스터의 가이드와 다식이 제공됩니다.</Item>
        </List>
        <CustomButton>
          <VscCalendar fontSize={23} /> 시음회 예약하기
        </CustomButton>
        <Space />
        <Space />
      </Container>
    );
  }
}
