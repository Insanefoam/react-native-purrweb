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

export const getColumns = () => axios.get("/columns").then(({ data }) => data);

export const getCards = () => axios.get("/cards").then(({ data }) => data);

export const getComments = () => axios.get("/comments").then(({ data }) => data);

export const addColumnBackend = (title) =>
  axios.post("/columns", { title, description: "No Description" }).then((res) => res);

export const deleteColumnBackend = (id) => axios.delete(`/columns/${id}`).then((res) => res);

export const addCardBackend = (title, description, checked, column) =>
  axios.post("/cards", { title, description, checked, column }).then((res) => res);

export const addCommentBackend = (body, cardId) =>
  axios.post(`/cards/${cardId}/comments`, { body }).then((res) => res);

export const deleteCommentBackend = (id) => axios.delete(`/comments/${id}`).then((res) => res);
