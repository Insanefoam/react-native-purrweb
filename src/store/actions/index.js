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
  SET_COLUMNS,
  SET_CARDS,
  SET_COMMENTS,
  DELETE_COLUMN,
} from "../constants/action_types";

export const setCards = (cards) => ({
  type: SET_CARDS,
  payload: { cards },
});

export const addCard = (id, title, description, columnId) => ({
  type: ADD_CARD,
  payload: { id, title, description, columnId },
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

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: { comments },
});

export const addComment = (id, cardId, body, userId) => ({
  type: ADD_COMMENT,
  payload: { id, cardId, body, userId },
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: { id },
});

export const changeComment = (id, body) => ({
  type: CHANGE_COMMENT,
  payload: { id, body },
});

export const setColumns = (columns) => ({
  type: SET_COLUMNS,
  payload: { columns },
});

export const addColumn = (id, title) => ({
  type: ADD_COLUMN,
  payload: { id, title },
});

export const deleteColumn = (id) => ({
  type: DELETE_COLUMN,
  payload: { id },
});

export const changeColumnTitle = (id, title) => ({
  type: CHANGE_COLUMN_TITLE,
  payload: { id, title },
});

export const initUser = (username) => ({
  type: INIT_USER,
  payload: { username },
});
