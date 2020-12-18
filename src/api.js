import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8090/users",
});

export const userApi = {
    userList : () => api.get("users"),
    userList: () => api.get(),
    insertUser: (user) => api.post("/", user),
    deleteUser: (id) => api.delete(`/${id}`),
    fetchUserById: (id) => api.get(`/${id}`),
    editUser: (user) => api.put(`/${user.id}`, user),
};



