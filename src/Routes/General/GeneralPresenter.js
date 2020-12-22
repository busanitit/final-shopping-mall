import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Base = styled.div`
  flex:1;
  padding: 30px;
  min-height: 500px;
`;

const BaseName = styled.div`
  color: #666;
  font-weight: 600;
  padding: 3px 0 4px;
  line-height: 20px;
  border-bottom: solid 1px #000000;
  font-size: 20px;
`;

const Table_tit = styled.div`
  display: grid;
  grid-template-columns: 5% 65% 15% 15%;
  padding: 20px;
  border-bottom: solid 1px #ebebeb;
  font-weight: bold;
  color: #6e6e6e;
  text-align: center;
`;

const Table_data = styled.div`
  display: grid;
  grid-template-columns: 5% 65% 15% 15%;
  padding: 20px;
  border-bottom: solid 1px #ebebeb;
  font-weight: bold;
  color: #6e6e6e;
  text-align: center;
`;

const Write = styled.a`
  font-size: 15px;
  color: #ababab;
`;

export default class extends React.Component {
  render() {
    return (
      <Base>
        <BaseName className="row">자유게시판 <hr/> <Write href='/#/gwrite'>글쓰기</Write> </BaseName>
        <Table_tit>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
        </Table_tit>
        <Table_data>
          <div>1</div>
          <div><Link to='/content/1'>자유게시판 ex</Link></div>
          <div>운영자</div>
          <div>12.20</div>
        </Table_data>
      </Base>
    );
  }
}
