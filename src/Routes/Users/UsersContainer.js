/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import UsersPresenter from "./UsersPresenter";
import { userApi } from "../../api";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
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

  render() {
    const { users, loading } = this.state;
    return <UsersPresenter users={users} loading={loading} />;
  }
}
