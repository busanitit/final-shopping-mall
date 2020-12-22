import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components'

const Product = styled.div`
    margin-top:50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr;
  gap: 0px 20px;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
`;

const Line = styled.div`
    font-size:23px;
    margin-bottom:8px;
    border-bottom:1px solid #e6e6e6;
    padding-bottom:20px;
`;

const SLink = styled(Link)`
    color:#000;
    &:hover{
        text-decoration:none;
        opacity:0.5;
        color:inherit;
    }
    margin-bottom:30px;
`;

const Box = styled.div`
    font-size:5px;
    border:1px solid #e6e6e6;
    padding:7px;
    margin-right: 5px;
    margin-top:7px;
    margin-bottom:7px;
`;

const BoxContainer = styled.div`
    display:flex;
    color:#666;

`;

const Name = styled.h6`
    font-size:13px;
    min-height:30px;
`;

const Title = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #145b3a;
  border-bottom: 1px solid #145b3a;
  margin-top: 80px;
`;

const Item = styled.li`
  width:50px;
  text-align: center;
  border-bottom:5px solid
    ${props => (props.current ? "#808080" : "transparent")};
`;
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ({ products, loading }) => 
loading
? "loading..."
:     
<>   
<Title>스토어</Title>  
<Product>
    {products.map(prod => (
        <SLink to="/detail">
        <div>
      <img src={prod.prodImage}></img>
      <BoxContainer><Box>조건부무료</Box><Box>포인트</Box></BoxContainer>
      <Name>[{prod.prodName}]{prod.prodSummary}</Name>
      <Line>\{numberWithCommas(prod.price)}</Line>
      </div>
      </SLink>
  ))};
  </Product>
  <nav aria-label='...'>
  <ul class='pagination pagination-lg'>
    <Item class='page-item active' aria-current='page'>
      <span class='page-link'>1</span>
    </Item>
    <Item class='page-item'>
      <a class='page-link' href='#'>
        2
      </a>
    </Item>
    <Item class='page-item'>
      <a class='page-link' href='#'>
        3
      </a>
    </Item>
    <Item class='page-item'>
      <a class='page-link' href='#'>
        4
      </a>
    </Item>
    <Item class='page-item'>
      <a class='page-link' href='#'>
        5
      </a>
    </Item>
  </ul>
</nav>
</>


