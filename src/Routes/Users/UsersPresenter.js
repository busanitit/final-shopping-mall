/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ users, loading }) =>
  loading
    ? "loading..."
    : users.map((user, i) => (
        <div key={i}>
          <div>{user.userID}</div>
          <div>{user.password}</div>
          <div>{user.userName}</div>
          <div>{user.phoneNum}</div>
          <div>{user.address}</div>
        </div>
      ));
