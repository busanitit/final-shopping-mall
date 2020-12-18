import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 25px 20px;
  justify-content: center;
  align-items: center;
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

const SemiTitle = styled.h4`
  color: #145b3a;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  &:first-child {
    margin-top: 5px;
  }
`;

const Input = styled.input`
  all: unset;
  border-bottom: 1px solid black;
  width: 45vw;
  font-size: 17px;
  &:focus {
    font-weight: 600;
  }
`;

const Form = styled.form``;

const Button = styled.button`
  border: 1px solid #145b3a;
  border-radius: 5px;
  padding: 20px 50px;
  background-color: #145b3a;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  width: 45vw;
`;

const Notice = styled.div`
  text-align: center;
  margin-top:-20px;
`;

const SLink = styled(Link)`
  font-size: 10px;
`;

const SignUpPresenter = ({
  userID,
  password,
  userName,
  phoneNum,
  address,
  handleSubmit,
  updateInfo,
}) => (
  <>
    <Title>Sign Up</Title>
    <SemiTitle>회원가입</SemiTitle>
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputBox>
          <Input
            placeholder='User ID'
            onChange={updateInfo}
            value={userID}
            name='userID'
          />
        </InputBox>
        <InputBox>
          <Input
            placeholder='Password'
            onChange={updateInfo}
            type="password"
            value={password}
            name='password'
          />
        </InputBox>
        <InputBox>
          <Input
            placeholder='User Name'
            onChange={updateInfo}
            value={userName}
            name='userName'
          />
        </InputBox>
        <InputBox>
          <Input
            placeholder='Phone Number'
            onChange={updateInfo}
            value={phoneNum}
            name='phoneNum'
          />
        </InputBox>
        <InputBox>
          <Input
            placeholder='Address'
            onChange={updateInfo}
            value={address}
            name='address'
          />
        </InputBox>
        <InputBox>
          <Button>Sign up</Button>
        </InputBox>
        <Notice>
          <SLink to='/login'>이미 회원이시라면?</SLink>
        </Notice>
      </Form>
    </Container>
  </>
);

export default SignUpPresenter;
