import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import styled from "styled-components";
import { GiDirectionSigns } from "react-icons/gi";
import { FaMapMarkerAlt, FaRegCalendarCheck, FaParking } from "react-icons/fa";
import {
  AiFillClockCircle,
  AiFillInfoCircle,
  AiOutlineWifi,
} from "react-icons/ai";
import { ImPhone } from "react-icons/im";

const links = {
  link1:
    "https://map.naver.com/v5/directions/-/14382454.087557292,4188710.8043508753,%EB%98%90%EC%98%A4%EA%B8%B0%20%EC%8A%A4%ED%86%A0%EC%96%B4,,/-/transit?c=14381968.4498260,4188793.3401846,15,0,0,0,dh",
  link2: "https://map.naver.com/v5/entry/place/79383833",
};

const Title = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #145b3a;
  border-bottom: 1px solid #145b3a;
<<<<<<< HEAD
=======
  margin-top: 80px;
>>>>>>> 2c0d3b4df69438455c37a6fae47efb1ef88db7af
  margin-bottom:10px;
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

const Addr = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 40px 10px;
  margin-bottom: 0;
`;

const StoreName = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const StoreAddr = styled.p`
  font-size: 26px;
  color: #145b3a;
  font-weight: 600;
`;

const LinkBtnContainer = styled.div`
  text-align: right;
`;

const LinkBtn = styled.a`
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  background-color: #145b3a;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  margin-right: 5px;
  &:hover {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 20px;
`;

const InfoTitle = styled.div`
  display: flex;
`;

const Text = styled.p`
  display: inline-block;
  color: #666;
  font-weight: 600;
  margin-top: -4px;
  line-height: 20px;
`;

const Text1 = styled.p`
  display: inline-block;
  color: #666;
  font-weight: 600;
  margin-top: -13px;
  line-height: 20px;
`;

const Pinfo = styled.span`
  display: inline-block;
  color: #aaa;
  margin-top: 10px;
`;

const IconCard = styled.div`
  text-align: center;
  margin-right: 40px;
  &:nth-child(2) {
    margin-right: 30px;
  }
`;

const ContactForHome = (props) => {
  const NAVER_API_KEY = "3hdfa5cfdv";

  return (
    <>
      <Title>Contact</Title>
      <RenderAfterNavermapsLoaded
        ncpClientId={NAVER_API_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMap
          mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
          style={{
            width: "100%", // 네이버지도 가로 길이
            height: "400px", // 네이버지도 세로 길이
          }}
          defaultCenter={{ lat: 35.182546, lng: 129.1998 }} // 지도 초기 위치
          defaultZoom={17} // 지도 초기 확대 배율
        >
          <Marker
            key={1}
            position={{ lat: 35.182546, lng: 129.1998 }}
            animation={2}
            title='또오기 스토어'
            onClick={() => {
              alert("여기는 또오기스토어입니다.");
            }}
          />
        </NaverMap>
      </RenderAfterNavermapsLoaded>
      <Addr>
        <div>
          <StoreName>또오기 스토어</StoreName>
          <StoreAddr>부산광역시 해운대구 송정동 140-0 4층</StoreAddr>
        </div>
        <LinkBtnContainer>
          <LinkBtn href={links.link1} target='_blank'>
            <GiDirectionSigns fontSize={17} /> 길찾기
          </LinkBtn>
          <LinkBtn href={links.link2} target='_blank'>
            <FaMapMarkerAlt fontSize={17} /> 지도에서 보기
          </LinkBtn>
        </LinkBtnContainer>
      </Addr>
      <Line />
      <Space />
      <InfoContainer>
        <InfoTitle>
          <FaMapMarkerAlt fontSize={15} color={"#aaa"} />
          &nbsp;오시는길
        </InfoTitle>
        <div>
          <Text>
            '송정주공1단지' 버스정류장 (09-011/09-012) 에서 도보로 1분 이내
            <br />
            송정해수욕장에서 도보 5분 이내 <br />
            <Pinfo>주차정보</Pinfo> 건물 앞 주차장 사용 가능
          </Text>
        </div>
      </InfoContainer>
      <Line />
      <Space />
      <InfoContainer>
        <InfoTitle>
          <AiFillClockCircle fontSize={15} color={"#aaa"} />
          &nbsp;<span>이용시간</span>
        </InfoTitle>
        <div>
          <Text1>
            <Pinfo>월요일</Pinfo>&nbsp;&nbsp;&nbsp; 13:00 ~ 21:00
            <br />
            <Pinfo>수요일</Pinfo>&nbsp;&nbsp;&nbsp; 13:00 ~ 21:00
            <br />
            <Pinfo>목요일</Pinfo>&nbsp;&nbsp;&nbsp; 13:00 ~ 21:00
            <br />
            <Pinfo>금요일</Pinfo>&nbsp;&nbsp;&nbsp; 13:00 ~ 21:00
            <br />
            <Pinfo>토요일</Pinfo>&nbsp;&nbsp;&nbsp; 10:00 ~ 19:00
            <br />
            <Pinfo>일요일</Pinfo>&nbsp;&nbsp;&nbsp; 10:00 ~ 19:00
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Pinfo>매주 화요일 휴무</Pinfo>
          </Text1>
        </div>
      </InfoContainer>
      <Line />
      <Space />
      <InfoContainer>
        <InfoTitle>
          <ImPhone fontSize={15} color={"#aaa"} />
          &nbsp;<span>전화번호</span>
        </InfoTitle>
        <div>
          <Text>070-8843-7333</Text>
        </div>
      </InfoContainer>
      <Line />
      <Space />
      <InfoContainer>
        <InfoTitle>
          <AiFillInfoCircle fontSize={15} color={"#aaa"} />
          &nbsp;<span>이용안내</span>
        </InfoTitle>
        <div>
          <Text style={{ display: "flex" }}>
            <IconCard>
              <div>
                <FaRegCalendarCheck fontSize={40} color={"#aaa"} />
              </div>
              <div>예약</div>
            </IconCard>
            <IconCard>
              <div>
                <FaParking fontSize={40} color={"#aaa"} />
              </div>
              <div>주차</div>
            </IconCard>
            <IconCard>
              <div>
                <AiOutlineWifi fontSize={40} color={"#aaa"} />
              </div>
              <div>무선 인터넷</div>
            </IconCard>
          </Text>
        </div>
      </InfoContainer>
      <Line />
      <Space />
    </>
  );
};

export default ContactForHome;
