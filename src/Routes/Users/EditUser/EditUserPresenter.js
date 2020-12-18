import { userApi } from "api";
import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";

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

class EditUserPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      userName: "",
      password: "",
      phoneNum: "",
      address: "",
    };
  }

  componentDidMount() {
    userApi
      .fetchUserById(window.localStorage.getItem("id"))
      .then((res) => {
        const {
          data: { id, userID, userName, password, phoneNum, address },
        } = res;
        this.setState({
          id,
          userID,
          userName,
          password,
          phoneNum,
          address,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  editUser = (e) => {
    e.preventDefault(); // form post 발동방지
    const { id, userName, password, address, phoneNum } = this.state;
    let user = {
      id,
      userName,
      password,
      address,
      phoneNum,
    };
    userApi
      .editUser(user)
      .then((res) => {
        // this.setState({})
        alert("유저 수정 성공");
        this.props.history.push("/users");
      })
      .catch((err) => {
        console.error("editUser() 에러", err);
        console.log(user);
        alert("유저 수정 실패, 관리자에게 문의하십시오", err);
      });
  };

  render() {
    const { userID, userName, password, address, phoneNum } = this.state;
    return (
      <>
        <Title>Edit USer</Title>
        <SemiTitle>회원정보 수정</SemiTitle>
        <Container>
          <Form>
            <InputBox>
              <Input
                placeholder='User ID'
                readOnly
                value={userID}
                name='userID'
              />
            </InputBox>
            <InputBox>
              <Input
                placeholder='Password'
                onChange={this.onChange}
                type='password'
                value={password}
                name='password'
              />
            </InputBox>
            <InputBox>
              <Input
                placeholder='User Name'
                onChange={this.onChange}
                value={userName}
                name='userName'
              />
            </InputBox>
            <InputBox>
              <Input
                placeholder='Phone Number'
                onChange={this.onChange}
                value={phoneNum}
                name='phoneNum'
              />
            </InputBox>
            <InputBox>
              <Input
                placeholder='Address'
                onChange={this.onChange}
                value={address}
                name='address'
              />
            </InputBox>
            <InputBox>
              <Button onClick={this.editUser}>Edit</Button>
            </InputBox>
          </Form>
        </Container>
      </>
    );
  }
}
export default EditUserPresenter;
