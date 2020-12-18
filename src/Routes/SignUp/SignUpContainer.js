import React, { Component } from "react";
import SignUpPresenter from "./SignUpPresenter";
import { userApi } from "../../api";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      password: "",
      userName: "",
      phoneNum: "",
      address: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userID, password, userName, phoneNum, address } = this.state;
    if (userID === "") {
      alert("아이디를 입력하세요");
      return;
    } else if (password === "") {
      alert("비밀번호를 입력하세요");
      return;
    } else if (userName === "") {
      alert("이름을 입력하세요");
      return;
    } else if (phoneNum === "") {
      alert("전화번호를 입력하세요");
      return;
    } else if (address === "") {
      alert("주소를 입력하세요");
      return;
    }
    this.saveUser();
  };

  updateInfo = (e) => {
    const {
      target: { value, name },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  saveUser = (e) => {
    const { userID, password, userName, phoneNum, address } = this.state;
    let user = {
      userID,
      password,
      userName,
      phoneNum,
      address,
    };
    userApi
      .insertUser(user)
      .then((res) => {
        alert(`${userName}님이 성공적으로 등록되었습니다`);
        this.props.history.push("/login");
      })
      .catch((err) => {
        alert("등록에 실패하였습니다");
        console.log(err);
        return;
      });
  };

  render() {
    const { userID, password, userName, phoneNum, address } = this.state;
    return (
      <SignUpPresenter
        userID={userID}
        password={password}
        userName={userName}
        phoneNum={phoneNum}
        address={address}
        handleSubmit={this.handleSubmit}
        updateInfo={this.updateInfo}
      />
    );
  }
}

export default SignUpContainer;
