/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Styled from 'styled-components';
const itemIMG = Styled.img`
    width: 264px,
    height: 264px
`;

export default ({ name, price, img }) => (
  <div>
    <itemIMG src={img} alt={name} />
    <span>{name}</span>
    <span>{price}</span>
  </div>
);
