/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 20px;
`;

export default class extends React.Component{
  render() {
    return (
      <div>
        1
      </div>
    );
  }
};