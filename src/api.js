import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8090/",
});

export const userApi = {
  userList: () => api.get('users'),
  insertUser: (user) => api.post("users/", user),
  deleteUser: (id) => api.delete(`users/${id}`),
  fetchUserById: (id) => api.get(`users/${id}`),
  editUser: (user) => api.put(`users/${user.id}`, user),
};
