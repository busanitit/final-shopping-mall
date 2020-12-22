import React, { Component, useEffect, useState } from 'react';
import { productApi } from '../../api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Product = styled.div`
    margin-top:50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr;
  gap: 0px 20px;
  grid-template-areas:
    ". . . ."
    ". . . .";
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

const BoxContainer = styled.div`
    display:flex;
    color:#666;

`;

const Box = styled.div`
    font-size:5px;
    border:1px solid #e6e6e6;
    padding:7px;
    margin-right: 5px;
    margin-top:7px;
    margin-bottom:7px;
`;

const Name = styled.h6`
    font-size:13px;
    min-height:30px;
    margin-top:5px;
`;

const Line = styled.div`
    font-size:23px;
    margin-bottom:8px;
    border-bottom:1px solid #e6e6e6;
    padding-bottom:20px;
`;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const StoreForHome = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(
        async () => {
            try {
                const { data } = await productApi.prodList();
                setData(data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
    )

    return (
        loading ? "loading..." :
            <Product>
                {data
                .slice(0,8)
                .map(prod => (
                    <SLink to="/detail">
                        <div>
                            <img src={prod.prodImage}></img>
                            <Name>[{prod.prodName}]{prod.prodSummary}</Name>
                            <Line>\{numberWithCommas(prod.price)}</Line>
                        </div>
                    </SLink>
                ))}
        </Product>
    );
}

export default StoreForHome;