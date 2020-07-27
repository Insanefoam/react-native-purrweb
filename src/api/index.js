import axios from "axios";

axios.defaults.baseURL = "https://trello-purrweb.herokuapp.com";

export const signIn = (email, password) =>
  axios.post("/auth/sign-in", { email, password }).then((res) => {
    if (res.data.name === "EntityNotFound") {
      return "err";
    }
    axios.defaults.headers.common.bearer = res.data.token;
    return "ok";
  });

export const signUp = (email, password, name) => {
  axios.post("auth/sign-up", { email, password, name }).then((res) => {
    if (res.data.name === "QueryFailedError") {
      return "err";
    }
    axios.defaults.headers.common.bearer = res.data.token;
    return "ok";
  });
};
