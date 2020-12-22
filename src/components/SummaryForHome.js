import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px 0px;
  margin-bottom:10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
`;

const Grid = styled.div`
  /* display: inline-block;
  vertical-align: middle;
  height:100%; */
`;

const Image = styled.div`
  background-image: url("https://modo-phinf.pstatic.net/20180615_61/1529037547812gxl57_PNG/mosaY1XUZ4.png?type=f320_320");
  background-size: cover;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

const ImageTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  margin-bottom:12px;
`;

const ImageDesc = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: #aaa;
`;

const Title = styled.h3`
  margin-top: 25px;
  color: #145b3a;
  font-weight: 600;
  font-size: 16px;
`;

const Text = styled.p`
  color: #555;
  font-weight: 600;
  padding: 3px 0 4px;
  line-height: 2;
  font-size: 15px;
`;

const SummaryForHome = () => (
  <Container>
    <GridContainer>
      <Grid>
        <Image />
        <ImageTitle>또오기 스토어</ImageTitle>
        <ImageDesc>[TTOOGI1981] Tea house & store</ImageDesc>
      </Grid>
      <Grid>
        <Title>TTOOGI 1981</Title>
        <Text>
          TTOOGI 1981(또오기 스토어)는 균형잡힌 삶, 소소한 행복을 추구하는
          이들의 일상 속 휴식을 더욱 풍요롭게 해줄 가치와 상품을 수집하고
          제안하는 TEA House & Store 입니다. for your Chillax Life!
        </Text>
      </Grid>
    </GridContainer>
  </Container>
);

export default SummaryForHome;
