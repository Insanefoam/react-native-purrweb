import api from "../services";

export const signIn = (email, password) =>
  api.post("/auth/sign-in", { email: email.trim(), password: password.trim() }).then((res) => {
    if (res.data.name === "EntityNotFound") {
      return undefined;
    }
    api.defaults.headers.Authorization = `Bearer ${res.data.token}`;
    return res.data;
  });

export const signUp = (email, name, password) =>
  api
    .post("auth/sign-up", { email: email.trim(), name: name.trim(), password: password.trim() })
    .then((res) => {
      if (res.data.name === "QueryFailedError") {
        return undefined;
      }
      api.defaults.headers.Authorization = `Bearer ${res.data.token}`;
      return res.data;
    });

export const getColumns = () => api.get("/columns").then(({ data }) => data);

export const getCards = () => api.get("/cards").then(({ data }) => data);

export const getComments = () => api.get("/comments").then(({ data }) => data);

export const addColumnBackend = (title) =>
  api.post("/columns", { title, description: "No Description" }).then((res) => res);

export const deleteColumnBackend = (id) => api.delete(`/columns/${id}`).then((res) => res);

export const changeColumnBackend = (id, title) =>
  api.put(`/columns/${id}`, { title }).then((res) => res);

export const addCardBackend = (title, description, checked, column) =>
  api.post("/cards", { title, description, checked, column }).then((res) => res);

export const changeCardBackend = (id, title) =>
  api.put(`/cards/${id}`, { title }).then((res) => res);

export const deleteCardBackend = (id) => api.delete(`/cards/${id}`).then((res) => res);

export const addCommentBackend = (body, cardId) =>
  api.post(`/cards/${cardId}/comments`, { body }).then((res) => res);

export const deleteCommentBackend = (id) => api.delete(`/comments/${id}`).then((res) => res);
