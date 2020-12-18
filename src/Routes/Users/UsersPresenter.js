/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from 'styled-components'

export default ({ users, loading, deleteUser, pushEditPage }) =>
  loading
    ? "loading..."
    : users.map((user, i) => (
        <div key={i}>
          <div>{user.userID}</div>
          <div>{user.password}</div>
          <div>{user.userName}</div>
          <div>{user.phoneNum}</div>
          <div>{user.address}</div>
          <button onClick={() => deleteUser(user.id)}>삭제</button>
          <button onClick={() => pushEditPage(user.id)}>수정</button>
          <hr />
        </div>
      ));
