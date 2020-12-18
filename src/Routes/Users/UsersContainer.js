/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import UsersPresenter from "./UsersPresenter";
import EditUserPresenter from "./EditUser/EditUserPresenter";
import { userApi } from "../../api";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
      editLoading: true,
      user: {},
    };
  }

  async componentDidMount() {
    try {
      const { data: users } = await userApi.userList();
      this.setState({
        users,
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  deleteUser = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      userApi
        .deleteUser(id)
        .then((res) => {
          alert("삭제 성공");
          this.setState({
            users: this.state.users.filter((user) => user.id !== id),
          });
        })
        .catch((err) => {
          alert("삭제 실패");
          console.log(err);
        });
    }
  };

  pushEditPage = (id) => {
    window.localStorage.setItem("id", id);
    this.props.history.push("/edit")
  };

  render() {
    const { users, loading } = this.state;
    return (
      <UsersPresenter
        users={users}
        loading={loading}
        deleteUser={this.deleteUser}
        pushEditPage={this.pushEditPage}
      />
    );
  }
}
