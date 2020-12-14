/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

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
    'https://shop-phinf.pstatic.net/20191227_285/1577419080262bQE7F_JPEG/14782468788749102_317800953.jpg?type=f260',
  img6:
    'https://shop-phinf.pstatic.net/20171014_299/ttoogi_1507956991705Np5y8_JPEG/31264185343830255_1428281514.jpg?type=f260',
  img7:
    'https://shop-phinf.pstatic.net/20170926_157/ttoogi_1506399502235CwSKT_JPEG/29705466859736143_-424578346.jpg?type=f260',
  img8:
    'https://shop-phinf.pstatic.net/20181017_48/ttoogi_15397429014146Ff33_JPEG/22461760258980053_1041434309.jpg?type=f260',
  img9:
    'https://shop-phinf.pstatic.net/20180623_151/ttoogi_1529736047677byerk_JPEG/12367227331406301_1541213810.jpg?type=f260',
  img10:
    'https://shop-phinf.pstatic.net/20171020_138/ttoogi_1508477763347Sq6BD_JPEG/31784942986231619_-240877390.jpg?type=f260',
  img11:
    'https://shop-phinf.pstatic.net/20170926_285/ttoogi_1506400354268g3QFd_JPEG/29707533908118869_1167314743.jpg?type=f260',
  img12:
    'https://shop-phinf.pstatic.net/20171006_1/ttoogi_1507268786617f6x9S_JPEG/30575980258545202_1346840135.jpg?type=f260',
};

const Item = styled.li`
  width:50px;
  text-align: center;
  border-bottom:5px solid
    ${props => (props.current ? "#808080" : "transparent")};
`;

export default ({name,price,img}) => (
      <>
        <div>Store</div>
        <hr />
        <Row className="mb-2" data-role="productList">
          <div class="item" className='mr-3'>
            <a
              href="#/detail/"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img1} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
          <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img2} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
          <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img3} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
          <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img4} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
        </Row>
        <hr />
        <Row className='mb-2'>
        <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img5} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
          <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img6} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
          <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img7} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
          <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img8} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
        </Row>
        <hr />
        <Row className='mb-5'>
        <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img9} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
          <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img10} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
          <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img11} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
          <div class="item" className='mr-3'>
            <a
              href="#"
              class="item_link">
              <div class="thumb_area">
                  <img src={images.img12} alt={name} />
                  <span>{name}</span>
                  <span>{price}</span>
              </div>    
            </a>  
          </div>
        </Row>
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
    );