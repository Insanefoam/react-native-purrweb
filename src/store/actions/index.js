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
  INIT_COLUMNS,
  INIT_CARDS,
  INIT_COMMENTS,
} from "../constants/action_types";

export const initCards = (cards) => ({
  type: INIT_CARDS,
  payload: { cards },
});

export const addCard = (title, description, columnId) => ({
  type: ADD_CARD,
  payload: { title, description, columnId },
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

export const initComments = (comments) => ({
  type: INIT_COMMENTS,
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

export const initColumns = (columns) => ({
  type: INIT_COLUMNS,
  payload: { columns },
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
