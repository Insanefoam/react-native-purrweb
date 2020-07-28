import axios from "axios";

axios.defaults.baseURL = "https://trello-purrweb.herokuapp.com";

export const signIn = (email, password) =>
  axios.post("/auth/sign-in", { email, password }).then((res) => {
    if (res.data.name === "EntityNotFound") {
      return undefined;
    }
    axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
    return res.data.name;
  });

export const signUp = (email, name, password) =>
  axios.post("auth/sign-up", { email, name, password }).then((res) => {
    if (res.data.name === "QueryFailedError") {
      return undefined;
    }
    axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
    return res.data.name;
  });

export const getColumnsAsync = () => axios.get("/columns").then((res) => res.data);
