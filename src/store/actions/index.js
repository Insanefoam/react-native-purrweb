import {
  ADD_CARD,
  DELETE_CARD,
  CHANGE_CARD_NAME,
  CHANGE_CARD_DESCRIPTION,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT,
  ADD_COLUMN,
  CHANGE_COLUMN_TITLE,
  INIT_USER,
} from "../constants/action_types";

export const addCard = (title, description, columndId) => ({
  type: ADD_CARD,
  payload: { title, description, columndId },
});

export const deleteCard = (id) => ({
  type: DELETE_CARD,
  payload: { id },
});

export const changeCardName = (id, title) => ({
  type: CHANGE_CARD_NAME,
  payload: { id, title },
});

export const changeCardDescription = (id, description) => ({
  type: CHANGE_CARD_DESCRIPTION,
  payload: { id, description },
});

export const addComment = (cardId, body, userId) => ({
  type: ADD_COMMENT,
  payload: { cardId, body, userId },
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: { id },
});

export const changeComment = (id, body) => ({
  type: CHANGE_COMMENT,
  payload: { id, body },
});

export const addColumn = (title) => ({
  type: ADD_COLUMN,
  payload: { title },
});

export const changeColumnTitle = (id, title) => ({
  type: CHANGE_COLUMN_TITLE,
  payload: { id, title },
});

export const initUser = (username) => ({
  type: INIT_USER,
  payload: { username },
});
