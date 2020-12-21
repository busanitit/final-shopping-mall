/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

const Container = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(6, 16%);
  justify-items: center;
  border-bottom: 1px solid #145b3a;
  padding: 10px 0;
`;

const GridContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(6, 16%);
  justify-items: center;
  align-items: center;
`;

const SemiTitle = styled.h4`
  color: #145b3a;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

export default ({ users, loading, deleteUser, pushEditPage }) =>
  loading ? (
    "loading..."
  ) : (
    <>
      <SemiTitle>회원 리스트</SemiTitle>
      <Container>
        <div>아이디</div>
        <div>이름</div>
        <div>연락처</div>
        <div>주소</div>
        <div>수정</div>
        <div>삭제</div>
      </Container>
      {users.map((user, i) => (
        <GridContainer key={i}>
          <div>{user.userID}</div>
          <div>{user.userName}</div>
          <div>{user.phoneNum}</div>
          <div>{user.address}</div>
          <AiFillEdit
            onClick={() => pushEditPage(user.id)}
            style={{ cursor: "pointer" }}
            fontSize={24}
            color={"#6155a6"}
          />
          <BiTrash
            onClick={() => deleteUser(user.id)}
            style={{ cursor: "pointer" }}
            fontSize={24}
            color={"#ff4646"}
          />
        </GridContainer>
      ))}
    </>
  );
